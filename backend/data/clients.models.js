const { default: mongoose } = require("mongoose");
const { connectDBs } = require("./db.databases");

const clientSchema=mongoose.Schema(
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
    },
    isAdmin:{
      type:Boolean,
      required:false
    }
  },
  {
    versionKey: false
  }
)

const {usersDB}=connectDBs();

module.exports=usersDB.model('Clients',clientSchema);