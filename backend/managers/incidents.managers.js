const { solveIncident } = require('../controllers/table.controller');
const incidentsModel=require('../data/incidents.models');

const incidentsManager = {
    getAllIncidents: async (filter_by_number) => {
        const incidents = await incidentsModel.find({}, { _id: 0, attacker_id: 1, client_id: 1, incident_id: 1, log_id: 1, response_id: 1,  solved: 1, risk_score_id: 1 })
            .sort({ _id: -1 }) 
            .limit(filter_by_number); 
        return incidents;
    }
    ,
    getAllIncidentsByCompany: async (client_id,filter_by_number) => {
        const incidents = await incidentsModel.find({client_id:client_id}, { _id: 0, attacker_id: 1, client_id: 1, incident_id: 1, log_id: 1, response_id: 1,  solved: 1, risk_score_id: 1 })
            .sort({ _id: -1 }) 
            .limit(filter_by_number); 
        return incidents;
    },
    getIncidentByID:async(incident_id)=>{   
        const result=await incidentsModel.findOne({incident_id:incident_id});
        return result;
    },
    solveIncidentByID:async(incident_id, solved)=>{
        const result=await incidentsModel.findOneAndUpdate({incident_id:incident_id},{solved:solved});
        return result;
    }
    

   
}

module.exports=incidentsManager;