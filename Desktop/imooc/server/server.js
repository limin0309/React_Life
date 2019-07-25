const express=require('express');
// 新建app
const app=express()
app.get('/',function(req,res){
  res.end('<h1>hello world</h1>')

})
app.get('/data',function(req,res){
  res.json({name:'imppc',type:'IT'})
})
app.listen(9093,function(){
  console.log('node app start at port 9093')
})
