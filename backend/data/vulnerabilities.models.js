const { default: mongoose } = require("mongoose");
const { connectDBs } = require('./db.databases');

const vulnerabilitiesSchema = mongoose.Schema(
    {
        vulnerability_id: {
            type: String,
            required: true
        },
        vulnerability_name: {
            type: String,
            required: true
        },
        affected_departments: {
            type: [String],
            required: true
        },
    },
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('vulnerabilities', vulnerabilitiesSchema);