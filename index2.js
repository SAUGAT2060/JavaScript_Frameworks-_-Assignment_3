import express from 'express'
import data from './data/employees.json' with{type:'json'}

const app = express()
const port =3000

app.get('/employees',(req,res)=>{
res.json(data)
})

app.listen(port,()=>{
  console.log(`URL:http://localhost:${port}`)
})