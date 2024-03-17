const express = require('express')
const cors = require('cors')
const session =  require('express-session')
const logger = require('morgan')

const app = express();

app.use(logger('dev'))
app.use(cors({
  origin: 'http://localhost:3000', // 允许的来源
  credentials: true // 允许包含凭据的请求
}));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "zhufeng"
}))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const users = [
  {
    id: 1,
    name: "Tom2222111",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Tom2222222233333",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Tom222222333",
    createdAt: new Date().toISOString()
  }
]

app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users
  })
})

app.get('/api/users/:id', (req, res) => {
  let user = users.find(item => +item.id === +req.params.id)
  res.json({
    success: true,
    data: user
  })
})

app.post('/api/login', (req, res) => {
  const user = req.body;
  req.session.user = user;
  res.json({
    success: true,
    data: user,
  })
})

app.post('/api/register', (req, res) => {
  const user = req.body;
  // console.log('========', user)
  user.id = Date.now() + '';
  user.createdAt = new Date().toISOString();
  users.push(user);
  req.session.user = user;
  res.json({
    success: true,
    data: user,
  })
})

app.post('/api/logout', (req, res) => {
  req.session.user = null;
  res.json({
    success: true,
    data: null,
  })
})

app.post('/api/validate', (req, res) => {
  const user = req.session.user;
  if(user){
    res.json({
      success: true,
      data: user,
    })
  } else {
    res.json({
      success: false,
      error: '用户未登录',
    })
  }
})

app.listen(5002, () => {
  console.log('React SSR server success~~~')
})