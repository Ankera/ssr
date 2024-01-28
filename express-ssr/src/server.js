import express from 'express';
import render from './server/render'

const app = express();

app.use(express.static('./public'))

app.get('*', render)

app.listen(8787, () => {
  console.log('server success ~~~')
})