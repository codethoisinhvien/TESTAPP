import * as express from 'express';
import UserModel from '../model/User';
import Controller from './BaseController'
import Token  from '../middware/Token'
import { async } from 'q';
const user = new UserModel();

class UserController implements Controller{
  public path = '/user';
  public router = express.Router()
  private token = new Token()
 
  
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.delete(this.path,this.deleteUser)
    this.router.put(this.path,this.updateUser)
    this.router.get(this.path, this.getUser);

    this.router.post(this.path, this.createUser);
    this.router.post('/login',this.login)
  }
  login = async (request: express.Request, response: express.Response)=>{
     let message = request.body;
   
      user.model('User').findOne({usename:message.usename}).then(async res=>{
      if(res!=null){
       if(res.get('password')== message.password){
          await this.token.createToken(res);
        
          await response.status(200).send({success:true,token:this.token.token})

       }else{ 
       response.status(200).send({success:false,message:'tài khooản hoặc mật khẩu không đúng'})
       }
      }else{
        response.status(200).send({success:false,message:'tài khooản hoặc mật khẩu không đúng'})
      }
     })
    
  }
  createUser=(request: express.Request, response: express.Response)=>{
     
     // chua kiem tra 
     console.log(request.body);
     let message = request.body;
     
   
     
      user.save(message).then(
        doc => {
          
          response.status(200).send({success:true,message:"Đăng kí thành công "});
        }

      ).catch(err=>{
        
        response.status(400).send({success:false,message:"Tài khoản đã tồn tại"});
      });
   

  }
  updateUser(request: express.Request, response: express.Response){
    response.staus(200).send({test:1234});
  }
  deleteUser(request: express.Request, response: express.Response){
    response.staus(200).send({test:1234});
  }
  getUser(request: express.Request, response: express.Responses){
    response.staus(200).send({test:1234});
  }
 
  
}
 
export default UserController;