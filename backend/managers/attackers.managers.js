const attackersModels=require('../data/attackers.models');


const attackersManager={

    getAttackerByID:async(attacker_id)=>{
        const result=await attackersModels.findOne({attacker_id:attacker_id});
        return result;
},
    getAllAttackers:async()=>{
        const result=await attackersModels.find({});
        return result;
    }

}


module.exports=attackersManager;