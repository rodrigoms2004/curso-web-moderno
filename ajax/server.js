const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))    // permite carregar arquivos estáticos que estejam na raiz
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// armazenagem de arquivo
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query    uso: /parOuImpar?numero=130
    // req.params   uso: /parOuImpar/:numero /parOuImpar/223
    const par = parseInt(req.query.numero) % 2 === 0
    // console.log(req.query)
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))