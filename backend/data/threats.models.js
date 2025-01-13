const { default: mongoose } = require("mongoose");
const { connectDBs } = require('./db.databases');


const threatsSchema = mongoose.Schema(

    {
        threat_id:{
            type: String,
            required: true
        },
        threat_name:{
            type: String,
            required: true
        },
        threat_type:{
            type: String,
            required: true
        },
        attack_pattern_id:  
        {
            type: String,
            required: true
        },
        vulnerability_id:   
        {
            type: String,
            required: true
        },


    },

    {
        versionKey: false
    }


);
const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('threats', threatsSchema);