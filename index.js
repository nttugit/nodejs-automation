const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.json('Hello World!')
})


app.get('/about', (req, res) => {
    return res.json('about')
})


app.get('/contact', (req, res) => {
    return res.json("contact");
})

// them route hello
app.get('/hello', (req, res) => {
    return res.json("hello");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app