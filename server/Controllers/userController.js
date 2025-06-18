const userModel = require('../Models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRegistration=async(req, res)=>{

    const{name,email,password}=req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const data = await userModel.create({
        name,
        email,
        password: hash
    })
    res.send("user registered!!");
}

const userLogin=async(req, res)=>{
   const { email, password } = req.body;
   console.log(req.body);
    

     const user = await userModel.findOne({email:email});
    console.log(user);
    
  
        if(!user){
            res.status(404).send({msg: "Email not found"});
        }

        const passwordMatch = await bcrypt.compare(password, user.password); 
        if(!passwordMatch){
            res.status(404).send({msg: "Invalid password"})
        } 

        const Token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {expiresIn : '7 days'}); 
        console.log(Token);
        
        res.send({user, Token});
 }

    const userAuthentication=async(req, res)=>{
        const token=req.header('token')
        console.log(token)

        const verify=jwt.verify(token,process.env.JWT_KEY)
        console.log(verify)

        const user=await userModel.findById(verify.id).select('-password')
        res.send(user)
        
    }

module.exports = {
  userRegistration,
  userLogin,
  userAuthentication,
};