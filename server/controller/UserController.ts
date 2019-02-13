import * as express from 'express';
import { UserModel } from '../model/User';
import Controller from './BaseController'

class UserController implements Controller{
  public path = '/user';
  public router = express.Router();
 
  
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.delete(this.path,this.deleteUser)
    this.router.put(this.path,this.updateUser)
    this.router.get(this.path, this.getUser);

    this.router.post(this.path, this.createUser);
  }
  createUser=(request: express.Request, response: express.Response)=>{
     
     // chua kiem tra 
     console.log(request.body);
     let message = request.body;
     
     const user = new UserModel(message);
     
      user.save().then(
        doc => {
          console.log(doc)
          response.status(200).send({test:1234});
        }

      ).catch(err=>{
        response.staus(400);
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