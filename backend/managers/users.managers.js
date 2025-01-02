const clientModel=require('../data/clients.models');
const mongoose = require('mongoose');

const clientManager={

    findUser:async(username)=>{
        const user=await clientModel.findOne({username:username});
        return user;
    },
    addUser:async(newUser)=>{
        await clientModel.create(newUser);
    },
    updateUser:async(user)=>{
        await clientModel.findOneAndUpdate({"username":user.username},user);
    }
   

}


module.exports=clientManager;