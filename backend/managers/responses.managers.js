const responsesModel = require('../data/responses.models');

const responsesManager = {

    getByID:async(response_id)=>{
        const result=await responsesModel.findOne({response_id:response_id});
        
        return result;
    }

}

module.exports = responsesManager;