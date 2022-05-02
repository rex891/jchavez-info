const express = require('express')
const app = express()
const port = 80
app.use(express.static('client'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})