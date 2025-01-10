
const { default: mongoose } = require("mongoose");
const { connectDBs } = require('../data/db.databases');

const responsesModel = mongoose.Schema(
    {
        response_id: {
            type: String,
            required: true
        },
        
        security_team_id: {
            type: String,
            required: true
        },
        
        response_time:{
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('responses', responsesModel);