const { default: mongoose } = require("mongoose");

const adminSchema=mongoose.Schema(
  {
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    firstname:{
      type:String,
      required:true
    },
    lastname:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    company:{
      type:String,
      required:true
    }
  },
  {
    versionKey: false
  }
)

module.exports=mongoose.model('Admin',adminSchema);