const UserModels = require('../models/User')

exports.Createuser = async (req,res)=>{
   try {
    const {name,Email,phone,Designation,Gender,Course,image} = req.body

   const NewUser = new UserModels({
    name,Email,phone,Designation,Gender,Course,image
   })

   await NewUser.save()
   res.status(200).json({success:true,Message:'User Created Successfully',NewUser})
   } catch (error) {
    console.log(error)
   res.status(500).json({success:false,Message:'Internal server error',NewUser})

   }
}

//get api
exports.GetUser = async (req,res)=>{
    try {
        const user = await UserModels.find()
        if(!user){
            return res.status(404).json({success:false,Message:'user not found'})
        }
        res.status(200).json({success:'true',user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,Message:'Internal server error'})
    }
}

//update api
exports.UpdateUser = async (req,res)=>{
    try {
        UserId = req.params.id
        const UpdateUser =await UserModels.findByIdAndUpdate(UserId,req.body,
            {new:true})
            if(!UpdateUser){
                return res.status(404).json({success:false,Message:'user not found'})
            }
            res.status(200).json({success:'true',Message:'User Updated Succesfully',UpdateUser})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,Message:'Internal server error'})
    }
}

//delete api

exports.DeleteUser = async (req,res) => {
    try {
        UserId = req.params.id
        const deletedUser =await UserModels.findByIdAndDelete(UserId)
            if(!deletedUser){
                return res.status(404).json({success:false,Message:'user not found'})
            }
            res.status(200).json({success:'true',Message:'User Deleted Succesfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,Message:'Internal server error'})
    }
}
