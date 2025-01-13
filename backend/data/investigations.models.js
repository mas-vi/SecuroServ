const { default: mongoose } = require("mongoose");
const { connectDBs } = require('./db.databases');

const investigationsSchema = mongoose.Schema(
    {
        investigation_id: {
            type: String,
            required: true
        },
        investigation_name: {
            type: String,
            required: true
        },
        solution_id: {
            type: String,
            required: true
        },
        impact_id: {
            type: String,
            required: true
        },
        security_team_id: {
            type: String,
            required: true
        },
        vulnerability_id: {
            type: String,
            required: true
        },
       
    },
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('investigations', investigationsSchema);