
import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  email:String,
  usename:String,
  password:String,
  active: Boolean,
 
});

export const UserModel = model('User',UserSchema );