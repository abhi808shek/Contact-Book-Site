const Contact_Details = require("../models/Contact_Data_Model");

const user_contact_detail = async(req,res)=>{
    try {
        const response =  new Contact_Details(req.body)
        await response.save()
        res.status(200).json({status:"success",message:"Data Saved Successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const get_all_contact_detail = async(req,res)=>{
    try {
        const response =  await Contact_Details.find()
        res.status(200).json({status:"success",message:"Retrived All Data Successfully",data:response})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const get_single_contact_detail = async(req,res)=>{
    try {
        const _id = req.params.id;
        const userContact1 = await Contact_Details.find({_id})
        res.status(200).json({status:"success",message:"Retrived Single Data Successfully",data:userContact1})
        console.log(userContact1);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const delete_single_contact_detail = async(req,res)=>{
    try {
        const _id = req.params.id;
        const userContact1 = await Contact_Details.findByIdAndDelete({_id})
        res.status(200).json({status:"success",message:"Deleted Single Data Successfully",data:userContact1})
        console.log(userContact1);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const delete_all_contact_detail = async(req,res)=>{
    try {
        const userContact1 = await Contact_Details.deleteMany()
        res.status(200).json({status:"success",message:"Deleted All Data Successfully",data:userContact1})
        console.log(userContact1);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const update_single_contact_detail = async(req,res)=>{
    try {
        const _id = req.params.id;
        const userContact1 = await Contact_Details.findByIdAndUpdate({_id},req.body,{new:true})
        res.status(200).json({status:"success",message:"Updated Single Data Successfully",data:userContact1})
        console.log(userContact1);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {
    user_contact_detail,
    get_all_contact_detail,
    get_single_contact_detail,
    delete_single_contact_detail,
    delete_all_contact_detail,
    update_single_contact_detail
}