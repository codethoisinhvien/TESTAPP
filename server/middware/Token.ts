import { async } from "q";

const fs   = require('fs');
const jwt  = require('jsonwebtoken');
//const User = require('../database/user');
let user ={username:'phongthien',password:'13081999',token:""}
class Token{
   token:string
  createToken= async (user)=>{
   
    let res = await jwt.sign({user:user},"dequan",{ expiresIn:'180'})
    await console.log(res);
    this.token = res;

}
  




}
export default Token
