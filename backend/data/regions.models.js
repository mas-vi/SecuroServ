
const { default: mongoose } = require("mongoose");
const { connectDBs } = require('../data/db.databases');

const regionsModels = mongoose.Schema(
    {
        region_id: {
            type: String,
            required: true
        },
        
        region_continent: {
            type: String,
            required: true
        },
        
        region_country:{
            type: String,
            required: true
        },    
    },
    
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('regions', regionsModels);