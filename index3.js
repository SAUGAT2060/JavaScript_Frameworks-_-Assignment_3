import express from 'express'

const app = express()
const port = 3000

app.get('/get',(req,res)=>{
  res.send ("Learned about get method")
})
app.post('/post',(req,res)=>{
  res.send("Learned about post method")
})
app.put('/put',(req,res)=>{
  res.send("Learned about put method")
})
app.delete('/delete',(req,res)=>{
  res.send("Learned about delete method")
})
app.listen(port,()=>{
  console.log(`URL:http://localhost:${port}`)
})