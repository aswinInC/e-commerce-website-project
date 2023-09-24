const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")

const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))

let databaseconnection = database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Aswin0809@",
    database:"project"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})

connect.post('/loginpage',(request,response)=>{
    let {name,email,city,country,phonenumber,state,password,roll} = request.body
    let sql = "insert into customer(name,email,city,state,country,phonenumber,username,password,roll)value(?,?,?,?,?,?,?,?,?)"
    databaseconnection.query(sql, [name,email,city,state,country,phonenumber,phonenumber,password,roll],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.post('/login',(request,response)=>{
    let {username,password}=request.body
    let sql='select * from customer where username=?'
    databaseconnection.query(sql,[username],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
        else if(result.length>0){
            let dbusername=result[0].username
            let dbpassword=result[0].password
            let id=result[0].id
            var roll=result[0].roll
            if(dbusername===username && dbpassword===password){
                response.send({"status":"success","id":id,"roll":roll})
            }
            else{
                response.send({"status":"invalid_user"})
            }
        }
        else{
            response.send({"status":"error"})
        }
    })
})

connect.get('/getdata',(request,response)=>{
    let sql='select * from admins'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.get('/getsingle/:aid',(request,response)=>{
    let {aid}=request.params
    let sql='select * from admins where aid=?'
    databaseconnection.query(sql,[aid],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.post('/delete',(request,response)=>{
    let aid=request.body.aid
    let sql='delete from admins where aid=?'
    databaseconnection.query(sql,[aid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})

connect.put('/update/:aid',(request,response)=>{
    let {aid}=request.params
    let {image,title,detail,price}=request.body
    let sql='update admins set image=?,title=?,detail=?,price=? where aid=?'
    databaseconnection.query(sql,[image,title,detail,price,aid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})

connect.get('/getsingle/:aid',(request,response)=>{
    let {aid}=request.params
    let sql='select * from admins where aid=?'
    databaseconnection.query(sql,[aid],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.listen(3002, ()=>{
    console.log("your server is running in port ");
})