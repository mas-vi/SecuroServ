const threatsModel = require('../data/threats.models');


const threatsManager = {
    getAllThreats: async (filter_by_number) => {
        const threats = await threatsModel.find({}, { _id: 0, threat_id: 1, threat_name: 1, threat_type: 1, attack_pattern_id: 1, })
            .sort({ _id: -1 })
            .limit(filter_by_number);
        return threats

    }


}

module.exports = threatsManager;