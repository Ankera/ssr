import React from 'react'
import Counter from '../routers/counter'
import { renderToString } from 'react-dom/server'

const express = require('express');
const app = express();
console.log('appppp', app);
app.use(express.static('public'))

app.get('*', (req, res) => {
  const html = renderToString(<Counter message="this is msg"></Counter>)
  console.log('=========', html);
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js"></script>
      <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js"></script>
      <script src="/client.js"></script>
    </body>
  </html>
  `)
})

app.listen(3001, () => {
  console.log('server success...')
})