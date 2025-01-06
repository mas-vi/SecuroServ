
const { default: mongoose } = require("mongoose");
const { connectDBs } = require('../data/db.databases');

const riskScoresModel = mongoose.Schema(
    {
        risk_score_id: {
            type: String,
            required: true
        },
        
        risk_name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('risk_scores', riskScoresModel);