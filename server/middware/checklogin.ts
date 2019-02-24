const fs   = require('fs');
const jwt  = require('jsonwebtoken');
//const User = require('../database/user');
let user ={username:'phongthien',password:'13081999',token:""}
export class Token{
 createToken=  (req,res,next)=>{
    
    jwt.sign({user:user},"dequan",{ expiresIn:'180'},function(err,token){
        user.token = token;
        res.json({token:token});

    })

}
  verifyToken = (req,res,next)=>{
     
    let token = req.headers.authorization
    jwt.verify(token,"dequan",(err,authData,next)=>{
        if(authData==undefined){
            res.status(401)
        }
       
     
    })


}
deleteToken = function(req,res,next){

}

}

