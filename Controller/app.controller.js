const jsonwebtoken = require("jsonwebtoken")

exports.getData =async(req,res)=>{
const token=   jsonwebtoken.sign({name:"Esmail"},"esmail",{expiresIn:"3d"})
    res.json({token:token})
}
const isToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXNtYWlsIiwiaWF0IjoxNjQ5MzUwMjQwLCJleHAiOjE2NDk2MDk0NDB9.OvZk-gKH5BN68174JFjQ4XxCTUJXowHW5YGGAptoWfM"

exports.checkToken=async(req,res)=>{
    let Token = req.header('token')
 try {
     let data = jsonwebtoken.verify(Token,"esmail");
     res.json(data)

 } catch (error) {
     res.send(error)
 }

}

