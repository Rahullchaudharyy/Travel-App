import mongoose from "mongoose";
import { Subject } from "rxjs";
const StudentSchema = mongoose.Schema({

    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    class:{
        type:[Number|| String],
        required:true,
        
    }
    




},{timestamps:true})

