const mongoose=require("mongoose");

const CharacterSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    Abilities:{
        type:String,
        required:true
    },
    Power:{
        type:String,
        required:true
    },
    Race :{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

module.exports=mongoose.model("Character",CharacterSchema);