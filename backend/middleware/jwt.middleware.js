const jwt=require('jsonwebtoken');
require('dotenv').config();

const jwtMiddleware={

    verify:async(req,res,next)=>{
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 'message': 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1]; 

        
     
        jwt.verify(
            token,
            process.env.ACCES_TOKEN_SECRET,
            (err,decoded)=>{
                if(err) return res.status(403).json();
                req.user=decoded.username;
                next();
            }
        )
    }
    
}

module.exports=jwtMiddleware;