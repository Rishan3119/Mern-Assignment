const mongoose = require('mongoose')
const express = require("express")
const cors = require("cors")
const EmployeeModel = require('./models/Employeee')
const  routers  = require('./routes/routes')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',routers)

mongoose.connect("mongodb://127.0.0.1:27017/employee");


app.post('/login', (req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            } else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("no record existed")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
})

app.listen(3001,()=>{
    console.log("server is running")
})