const express = require('express')
const app = express()
const path = require('path')

// viewed at http://localhost:3000
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.listen(3000);
