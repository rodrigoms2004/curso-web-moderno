import $ from 'jquery'

// lista de callbacks a serem executadas
const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // evita que a propriedade seja processada umas segunda vez
                
                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e) // chamada recursiva todos os includes
            }
        })
    })
}

loadIncludes()