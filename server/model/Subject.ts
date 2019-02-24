
import { model, Schema } from 'mongoose';

const SubjectSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  email:String,
  usename:String,
  password:String,
  active: Boolean,
 
});

export const SubjectModel = model('Subject',SubjectSchema );