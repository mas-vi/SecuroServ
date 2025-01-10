const companyModel=require('../data/company.models');

const companyManager={
    getAllCompanies:async()=>{
        const result=await companyModel.find({});
        return result;
    },
    
    getCompanyID:async(company)=>{
        const result=await companyModel.findOne({client_name:company});
        return result;
    }
}

module.exports=companyManager;
