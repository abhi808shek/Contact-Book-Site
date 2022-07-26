const Signup_Model = require("../models/Signup_Model");

const create_signup_user =async(req,res)=>{
    try {
    const {id} = req.params.id
    const {name,email,password,Cpassword} = req.body
    if (!name && !email && !password && !Cpassword) {
        return res.status(400).json({message:"Please Fill all the Details.."})
    }
    const userExist = await findOne({email})
    if (userExist) {
        return res.status(400).json({message:"email is alredy exist.."}) 
    }
    const create_data = new Signup_Model(req.body)
    await create_data.save();
    // if (create_data) {
    //     return res.status(200).json({message:"Data Saved SuccessFully"}) 
    // }
    const accessToken = jwt.sign({id:id},"dfzfdnsdfisfjsdfjksmfkfjfmfbvhdfbfnf",{expiresIn:"7d"})
    res.status(200).json({
      status:"success",
      name:login_success[0].name,
      accessToken:accessToken
    })
    
} catch (error) {
    res.status(500).send(error.message);
}}

module.exports={create_signup_user}