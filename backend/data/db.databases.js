const mongoose = require('mongoose')

const USERS_URI =
    'mongodb+srv://ionut:ionut@cluster0.xqxor.mongodb.net/Cybersecurity_users'
const INCIDENTS_URI =
   'mongodb+srv://ionut:ionut@cluster0.xqxor.mongodb.net/Cybersecurity_threats'

const connectDBs = () => {
    try {
        const usersDB = mongoose.createConnection(USERS_URI);
        const incidentsDB = mongoose.createConnection(INCIDENTS_URI);
        console.log("Connected");
        return { usersDB, incidentsDB };
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

module.exports = { connectDBs }


