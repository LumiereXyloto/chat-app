const mongoose = require('mongoose')
// 链接MongoDB
const DB_URL = 'mongodb://localhost:27017/chat-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect successfully')
})