import model from '../models/index'


const { user } = model;

class userService {
    getUser = async (email) => {
        const user = await users.findOne({
            where:{
                email,
            },
        });
        return user;
    }
}
export default new userService();