import models from '../models/index';

const { users } = models;

class UserController{
    getUser = (req,res)=>{
        const user = await user.findAll();
        const users = _.map(user,(o) =>{

        })
        res.status(200).json({message:'user'});
    }
    fffUser = (req,res)=>{
        res.status(200).json({message:'hi555'});
    }
    postUser = (req,res) =>{

    }
}

export default new UserController;