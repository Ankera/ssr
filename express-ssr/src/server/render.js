import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './app'
import getScript from './getScript';

export default (req, res) => {
  const contentHTML = ReactDOM.renderToString(<App />)

  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${contentHTML}</div>
    </body>
      ${getScript()}
    </html>
    `
  )
}