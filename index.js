const { Client } = require("@notionhq/client");
const express = require('express')

const WidgetRouter = require("./src/widget.js");

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/widget', WidgetRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

