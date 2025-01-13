const vulnerabilitiesModel=require('../data/vulnerabilities.models');

const vulnerabilitiesManager = {
    getAllVulnerabilities: async () => {
        const vulnerabilities = await vulnerabilitiesModel.find({ }, { _id: 0, vulnerability_id: 1, vulnerability_name: 1, affected_departments: 1 ,vulnerability_id:1});
        
        return vulnerabilities;
    }
}


module.exports=vulnerabilitiesManager;
