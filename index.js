const express = require('express') //express 모듈을 가져온다.
const app = express() //펑션을 이용해서 새로운 익스프레스 앱을 만들고
const port = 5000 // 포트는 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://min:kjh99302@boilerplate.vsmao.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
      .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 5000번에서 앱을 실행하는 것