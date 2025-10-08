import express from 'express'

const app = express()
const port = 3000

app.get('/get',(req,res)=>{
  res.send ("Learned about get request")
})

app.listen(post,()=>{
  console.log(`URL:http://localhost:${port}`)
})