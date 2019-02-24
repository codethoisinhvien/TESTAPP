import { model, Schema } from 'mongoose';

const QuestionSchema: Schema = new Schema({
    question:String,
    answer :[]
    


 
});

export const QuestionModel = model('Question',QuestionSchema );