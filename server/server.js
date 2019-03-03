const express = require('express')
const mongoose = require('mongoose')

// 链接MongoDB
const DB_URL = 'mongodb://localhost:27017/chat-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect successfully')
})

// 类似于mysql的表格，MongoDB里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))

// 新增数据
// User.create({
//   user: 'ljq',
//   age: 21
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// 删除18岁的数据
// User.remove({age:18}, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   }
// })

// 更新操作
// User.update({'user':'ljq'}, {'$set': {'age':18}}, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   }
// })


// 新建app
const app = express()

app.get('/',function(req, res){
  res.send('<h1>hello world</h1>')
})

app.get('/data',function(req,res){
  User.find({age:18}, function(err, doc){
    return res.json(doc)
  })
  // res.json({name:'hello',type:'IT'})
})

app.listen(9093, function(){
  console.log('Node app start at port 9093')
})