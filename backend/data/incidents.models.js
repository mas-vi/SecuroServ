const { default: mongoose } = require("mongoose");
const { connectDBs } = require('../data/db.databases');

const incidentsSchema = mongoose.Schema(
    {
        incident_id: {
            type: String,
            required: true
        },
        attacker_id: {
            type: String,
            required: true
        },
        client_id: {
            type: String,
            required: true
        },
        risk_score_id: {
            type: String,
            required: true
        },
        response_id: {
            type: String,
            required: true
        },
        attack_time: {
            type: String,
            required: true
        },
        attack_duration: {
            type: String,
            required: true
        }
        ,
        log_id: {
            type: String,
            required: true
        },
        solved:{
            type:String,
            required:true
        }
    },
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('Incidents', incidentsSchema);