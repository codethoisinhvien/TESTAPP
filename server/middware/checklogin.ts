const fs   = require('fs');
const jwt  = require('jsonwebtoken');
//const User = require('../database/user');
export class Token{
 createToken=  (req,res,next)=>{
    const user ={username:'phongthien',password:'13081999'}
    jwt.sign({user:user},"dequan",{ expiresIn:'180'},function(err,token){
        res.json({token:token});
    })

}
  verifyToken = (req,res,next)=>{
      console.log(req.body);
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicGhvbmd0aGllbiIsInBhc3N3b3JkIjoiMTMwODE5OTkifSwiaWF0IjoxNTUwNTkzNDY5LCJleHAiOjE1NTA1OTM0Njl9.T0TJJTZVchcMsHWf9xGcDq8bj4UPYMSBqEH6mpLFIqE";
    jwt.verify(token,"dequan",(err,authData,res,next)=>{
        if(authData==undefined){
            res.sendStatus(403)
        }else{
            res.json(authData);
        }
     
    })


}

}

