const express = require('express')

const app = express()

app.use('/static', (req, res) => {
    const staticURI = 'https://raw.githubusercontent.com/superhuman54/serverless-spa/master/static';
    res.redirect(`${staticURI}${req.path}`)
})

app.get('/', (req, res) => {
    res.type('html').sendFile(__dirname + '/index.html')
})

module.exports = app