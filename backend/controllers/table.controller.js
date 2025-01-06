const incidentsManager=require('../managers/incidents.managers');
const usersManager=require('../managers/users.managers');
const companyManager=require('../managers/companies.managers');
const riskScoresManager=require('../managers/riskScores.managers');

const tableController = {
  getTable1:async(req,res)=>{
    const user=await usersManager.findUser(req.user);
   
      try{
        let results=[];
        const clients=await companyManager.getAllCompanies();
        if(!user.isAdmin)
        {
          const company=clients.find((client)=>{
            return user.company===client.client_name;
          })
          const client_id=company? company.client_id:"";
          results=await incidentsManager.getAllIncidentsByCompany(client_id,req.params.limit);
         
        }
        
        else results=await incidentsManager.getAllIncidents(req.params.limit);
        
        
        const risk_scores=await riskScoresManager.getAllRiskScores();

       
 
        const processedResults=results
        .map( (element) => {
          let company_name="";
          if(!user.isAdmin)
          {
            company_name=user.company;
          }
          else{
            const foundCompany=clients.find((company)=>{
            
              return company.client_id===element.client_id;
            });
           company_name=foundCompany? foundCompany.client_name :"";  
          }
          
          
          const risk_score = risk_scores.find((risk) => {
            
              return risk.risk_score_id === element.risk_score_id;
          });
          const risk_score_name = risk_score ? risk_score.risk_name : "";
          
          return{
            attacker_id:element.attacker_id,
            client_name:company_name,
            incident_id:element.incident_id,
            log_id:element.log_id,
            response_id:element.response_id,
            risk_score_name:risk_score_name,
            solved:element.solved
          }
          }
         
        );
        
        
        
        res.status(200).json({'data':processedResults});

    }
    catch(err)
    {
        res.status(500).json({'error':err});
    }
    }
   
    
}

module.exports = tableController;