const jwt=require('jsonwebtoken');
require('dotenv').config();

const jwtMiddleware={

    verify:async(req,res,next)=>{
        const token = req.cookies.jwt;
        
        if(!token)
            return res.status(401).json();
        
     
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