
import * as mongoose from 'mongoose';

interface IUser extends mongoose.Document {
  usename: string,
  password: string
 
}


const UserSchema: mongoose.Schema  = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email:String,
  usename:String,
  password:String,
  active: Boolean,
  access:Number,
  token: String
 
});
UserSchema.pre<IUser &  Document>('save', function(next) {
  // chua ma hoa pass
  UserModel.findOne({usename : this.usename}, 'usename', (err, results)=>{
    if(err) {
        next(err);
    } else if(results) {
       
        next(new Error("usename exist"));
    } else {
        next();
    }
});

  
});


const UserModel  = mongoose.model('User',UserSchema);
export default UserModel;

