import * as express from 'express';
import UserModel from '../model/User';
import Controller from './BaseController'
import Auth from '../middware/Auth'
import { async } from 'q';


class UserController implements Controller {
  public path = '/user';
  public router = express.Router()
  private token = new Auth();
 


  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.delete(this.path,this.token.verifyToken,this.deleteUser) // xoa user 
    this.router.put(this.path,this.token.verifyToken, this.updateUser)// sua user
    this.router.get(this.path,this.token.verifyToken, this.getUser);//get user
    this.router.get('/auth',this.token.verifyToken, this.getAuth)// kiem tra da danng nhap  SPA
    this.router.post(this.path, this.createUser);//tao user
    this.router.post('/login', this.login)//login
   
  }
  login =(request: express.Request, response: express.Response) => {
    console.log('/api/login')
    let message = request.body;
    let user = new UserModel();


    message = JSON.parse(message)
    user.model('User').findOne({ usename: message.usename }).then(async res => {
      if (res != null) {
        if (res.get('password') == message.password) {
          console.log(res)
          await this.token.createToken(res);
          response.status(200).send({ success: true, token: this.token.token })

        } else {
          response.status(200).send({ success: false, message: 'Tài khooản hoặc mật khẩu không đúng' })// pass không đúng
        }
      } else {
        response.status(200).send({ success: false, message: 'Tài khooản hoặc mật khẩu không đúng' })// tài khoản không tồn tại
      }
    })

  }
  createUser = (request: express.Request, response: express.Response) => {

    // chua kiem tra 
    console.log('POST /api/user')
    let message = JSON.parse(request.body);
    message.access = 1;
    console.log(message);
    let user = new UserModel(message);
    user.save().then(
      doc => {

        response.status(200).send({ success: true, message: "Đăng kí thành công " });
      }

    ).catch(err => {
      console.log(err)
      response.status(400).send({ success: false, message: "Tài khoản đã tồn tại" });
    });


  }
  getUser =  ((request: express.Request, response: express.Response, next)=> {
    console.log("get:api/user")
    // try vấn database
    let user = new UserModel();
    user.model('User').findOne({usename:this.token.data.usename}).then(res=>{
      if(res!=null){
      response.status(200).json({success:true, data:res });
      }else{
      response.status(200).json({success:true, message:'Có lỗi xảy ra' });
      }
    })
 

  })
  getAuth = (this.token.createToken,(request: express.Request, response: express.Response, next) => {
    console.log("get:api/auth")
    
     
    response.status(200).json({ success: true })// vuot qua verify
  })
  updateUser(request: express.Request, response: express.Response) {
    response.staus(200).send({ test: 1234 });
  }
  deleteUser(request: express.Request, response: express.Response) {
    response.staus(200).send({ test: 1234 });
  }





}

export default UserController;