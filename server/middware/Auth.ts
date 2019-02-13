import { async } from "q";
import UserModel from '../model/User';
import { userInfo } from 'os';
const fs = require('fs');
const jwt = require('jsonwebtoken');
//const User = require('../database/user');
const key = "phongthiendequan"
class Auth {
  token: string
  data: any
  user = new UserModel()
  // tạo mã token 
  createToken = async (user) => {
    let val = {
      usename: user.usename,
      password: user.password
    }
    // validate
    this.token = await jwt.sign(val, key)// chua kiem soat phien 
    console.log("Tạo token" + this.token);


  }
  // kiểm tra mã token 
  verifyToken = (req, res, next) => {
    let auth = req.headers.authorization
    console.log(auth)
    jwt.verify(auth, key, (err, payload) => {


      if (err) {
        return res.status(200).json({ success: false, message: "Xác thực không hợp lệ " })
      }
      this.data = payload;// lay data
      next()



    });


  }





}
export default Auth
