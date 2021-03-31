import model from '../models/index'
import _ from 'lodash';


const { users } = model;

class userService {
    getUser = async (email) => {
        const user = await users.findOne({
            where:{
                email:email,
            },
        });
        return user;
    }
}
export default new userService();