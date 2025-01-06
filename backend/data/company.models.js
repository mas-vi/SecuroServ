const { default: mongoose } = require("mongoose");
const { connectDBs } = require('../data/db.databases');

const companySchema = mongoose.Schema(
    {
        client_id:{
            type:String,
            required:true
        },
        client_name: {
            type: String,
            required: true
        },
        attack_number: {
            type: Number,
            required: true
        },
    },
       
    {
        versionKey: false
    }
)

const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('Clients', companySchema);