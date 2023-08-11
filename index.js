const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/he-he', (req, res) => {
    res.send('He he!')
})

app.get('/about', (req, res) => {
    res.send('My name is Nguyen Tuan Tu!')
})


app.get('/contact', (req, res) => {
    res.send('contact 22')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})