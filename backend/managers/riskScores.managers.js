
const riskScoresModel=require('../data/riskScores.models');

const riskScoresManager={
    getAllRiskScores:async()=>{
        const result=await riskScoresModel.find({});
        return result;
    }
}

module.exports=riskScoresManager;
