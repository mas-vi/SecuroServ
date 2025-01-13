const solutionModel=require('../data/solutions.models');

const solutionsManager={

    getSolutionByID:async(solution_id)=>{
        const result=await solutionModel.findOne({solution_id:solution_id},{_id:0,solution_id:1,solution_name:1,solution_steps:1});
        return result;
    }

}


module.exports=solutionsManager;