const incidentsManager = require('../managers/incidents.managers');
const usersManager = require('../managers/users.managers');
const companyManager = require('../managers/companies.managers');
const riskScoresManager = require('../managers/riskScores.managers');

const responsesManager = require('../managers/responses.managers');
const attackersManager = require('../managers/attackers.managers');
const regionsManager = require('../managers/regions.managers');
const investigationsManager = require('../managers/investigations.managers');
const vulnerabilitiesManager = require('../managers/vulnerabilities.managers');
const threatsManager=require('../managers/threats.managers');


const tableController = {
  getTable1: async (req, res) => {
    const user = await usersManager.findUser(req.user);

    try {
      let results = [];
      const clients = await companyManager.getAllCompanies();
      if (!user.isAdmin) {
        const company = clients.find((client) => {
          return user.company === client.client_name;
        })
        const client_id = company ? company.client_id : "";
        results = await incidentsManager.getAllIncidentsByCompany(client_id, req.params.limit);

      }

      else results = await incidentsManager.getAllIncidents(req.params.limit);


      const risk_scores = await riskScoresManager.getAllRiskScores();



      const processedResults = results
        .map((element) => {
          let company_name = "";
          if (!user.isAdmin) {
            company_name = user.company;
          }
          else {
            const foundCompany = clients.find((company) => {

              return company.client_id === element.client_id;
            });
            company_name = foundCompany ? foundCompany.client_name : "";
          }


          const risk_score = risk_scores.find((risk) => {

            return risk.risk_score_id === element.risk_score_id;
          });
          const risk_score_name = risk_score ? risk_score.risk_name : "";

          return {
            incident_id: element.incident_id,
            attacker_id: element.attacker_id,
            name: company_name,

            log_id: element.log_id,
            response_id: element.response_id,
            risk_name: risk_score_name,
            solved: element.solved
          }
        }

        );



      res.status(200).json({ 'data': processedResults });

    }
    catch (err) {
      res.status(500).json({ 'error': err });
    }
  }
  ,
  getResponseByID: async (req, res) => {
    try {
      const response = await responsesManager.getByID(req.params.id);

      if (!response) {
        res.status(404).json({ 'message': 'Response not found' });
      }
      else res.status(200).json({ 'data': response });

    }
    catch (err) {
      res.status(500).json({ 'error': err });
    }
  }
  ,
  getAttackerByID: async (req, res) => {

    try {

      const attacker = await attackersManager.getAttackerByID(req.params.id);

      if (!attacker) {
        res.status(404).json({ 'message': 'Attacker not found' });
      }
      else {





        const region = await regionsManager.getRegionByID(attacker.region_id);



        const region_continent = region ? region.region_continent : "";
        const region_country = region ? region.region_country : "";
        const processedAttacker = {
          attacker_id: attacker.attacker_id,
          region_continent: region_continent,
          region_country: region_country,

        }


        res.status(200).json({ 'data': processedAttacker });

      }
    }


    catch (err) {
      res.status(500).json({ 'error': err });
    }
  }
  ,
  solveIncidentByID: async (req, res) => {

    try {

      const user = await usersManager.findUser(req.user);
      if (!user.isAdmin)
        res.status(401).json({ 'message': 'Unauthorized' });
      else {
        const incident = await incidentsManager.getIncidentByID(req.params.id);
        if (!incident) {
          res.status(404).json({ 'message': 'Incident not found' });
        }
        else {
          await incidentsManager.solveIncidentByID(req.params.id, req.body.solved);
          res.status(200).json({ 'message': 'Incident solved' });
        }
      }
    }


    catch (err) {
      res.status(500).json({ 'error': err });
    }

  },
  getTable2: async (req, res) => {

    try {
      //Verificam ca e admin????
      // const user = await usersManager.findUser(req.user);

      // if (!user.isAdmin)
      //   res.status(401).json({ 'message': 'Unauthorized' });


      const investigations = await investigationsManager.getAllInvestigations(req.params.limit);

      const vulnerabilities = await vulnerabilitiesManager.getAllVulnerabilities();


      const processedResults = investigations.map((investigation) => {
        const vulnerability = vulnerabilities.find((vul) => {

          return vul.vulnerability_id === investigation.vulnerability_id;
        });
        const vulnerability_name = vulnerability ? vulnerability.vulnerability_name : "";
        return {
          investigation_id: investigation.investigation_id,
          investigation_name: investigation.investigation_name,
          solution_id: investigation.solution_id,
          impact_id: investigation.impact_id,
          security_team_id: investigation.security_team_id,
          vulnerability_name: vulnerability_name
        }
      });
      res.status(200).json({ 'data': processedResults });
    }


    catch (err) {
      res.status(500).json({ 'error': err });

    }


  },
  getTable3: async (req, res) => {
    try {
      const threats=await threatsManager.getAllThreats(req.params.limit);
      res.status(200).json({'data':threats});


    }
    catch (err) {
      res.status(500).json({ 'error': err });


    }
  }
}



module.exports = tableController;