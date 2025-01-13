const { default: mongoose } = require("mongoose");
const { connectDBs } = require('./db.databases');


const solutionsSchema = mongoose.Schema(

    {
        solution_id:{
            type: String,
            required: true
        },
        solution_name:{
            type: String,
            required: true
        },
        solution_steps:{
            type: String,
            required: true
        },
       

    },

    {
        versionKey: false
    }


);
const { incidentsDB } = connectDBs();

module.exports = incidentsDB.model('solutions', solutionsSchema);