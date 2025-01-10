
const { default: mongoose } = require("mongoose");
const { connectDBs } = require('../data/db.databases');

const attackersModels = mongoose.Schema(
    {
        attacker_id: {
            type: String,
            required: true
        },
        
        region_id: {
            type: String,
            required: true
        },
        
        
    },
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('attackers', attackersModels);