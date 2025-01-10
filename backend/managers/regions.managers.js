const regionsModels = require('../data/regions.models');

const regionsManager = {
    
    getRegionByID: async (region_id) => {
        const result = await regionsModels.findOne({ region_id: region_id });   
        return result;
}

}

module.exports = regionsManager;
