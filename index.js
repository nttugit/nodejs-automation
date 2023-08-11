const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/about22', (req, res) => {
    res.send('My name is Nguyen Tuan Tu!')
})


app.get('/contact', (req, res) => {
    res.send('contact 22')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})