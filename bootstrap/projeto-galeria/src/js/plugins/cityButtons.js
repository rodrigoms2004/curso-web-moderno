import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300    // seconds

function filterByCity(city) {
    $('[wm-city]').each(function(i, e) {
        const isTarget = $(this).attr('wm-city') === city   // if isTarget = false, city will be hidden
            || city === null                               // if isTarget = true, city will be shown
        if(isTarget) {
            $(this).parent().removeClass('d-none')          // remove espaços em branco entre as imagens
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function() {
    const cities = new Set  // Set não tem duplicação
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city'))
    })
    
    // transforma cidade em um botao usando map
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })
    
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)   // adiciona btnAll os botoes de cidades
    
    const btnGroup = $('<div>').addClass(['btn-group']) // btn-group do bootstrap 
    btnGroup.append(btns)                               // ver /bootstrap/exercicios/paginas/componentes.html linha 32
    
    $(this).html(btnGroup)
    return this
}

// só chama a função se a página for carregada com sucesso
onLoadHtmlSuccess(function() {
    $('[wm-city-buttons').cityButtons()
})


