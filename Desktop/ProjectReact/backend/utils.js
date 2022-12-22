import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'myJwtSecure',
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth=(req,res,next)=>{
  const Authorization=req.header.Authorization;
  console.log(req.body.toked)
  if(Authorization){
      const token=Authorization.slice(7,Authorization.length);
      jwt.verify(token,process.env.JWT_SECRET||'somethingsecret',
      (err,decode)=>{
          if(err){
              res.status(401).send({message:'invalid token'});
          }else{
              req.user=decode;
              next();
          }
      }
      );
  }
  else{
      res.status('401').send({message:'No Token'});
  }
  };