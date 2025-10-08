import express from 'express'
import data from './data/employees.json' with {type:'json'};
const app =express()
const port =3000



app.get('/',(req,res)=>{
res.send(`
<html>
      <head>
        <title>Group Names</title>
      </head>
      <body>
        <h1>Group 15 Members</h1>
        <ul>
          <li>Saugat Rana</li>
          <li>Kushal Gurung</li>
          <li>Lab_3-Assignment </li>
        </ul>
      </body>
    </html>
    
  `)
})

 app.listen(port,()=>{
   console.log(`URL:http://localhost:${port}`)
})
