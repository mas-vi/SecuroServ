const companyModel=require('../data/company.models');

const companyManager={
    getAllCompanies:async()=>{
        const result=await companyModel.find({});
        return result;
    }
}

module.exports=companyManager;
