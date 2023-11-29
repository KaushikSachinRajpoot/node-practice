const userModel = require('../Model/User');

const getAllUser = async(req, res)=>{
    let users;
    try {
        users = await userModel.find();
    } catch (error) {
        console.log(error)   
    }

    if(!users){
        return res.status(200).json({message: 'no user found'})
    }
return res.status(200).json({users});

}

module.exports= {getAllUser};
