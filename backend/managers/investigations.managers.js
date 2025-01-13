const investigationsModel=require('../data/investigations.models');

const investigationsManager = {

    getAllInvestigations: async (filter_by_number) => {
        const investigations = await investigationsModel.find({}, { _id: 0, investigation_id: 1, investigation_name: 1, solution_id: 1, impact_id: 1, security_team_id: 1, vulnerability_id: 1 })
            .sort({ _id: -1 }) 
            .limit(filter_by_number); 
        return investigations;
    }

}



module.exports=investigationsManager;