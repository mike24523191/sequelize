import passport from 'passport';
import localStrategy from 'passport-local';
import userService from '../services/user';
import {Strategy as jwtStrategy,ExtractJwt} from 'passport-jwt';
//import truncate from 'lodash.truncate';

require('dotenv').config();

//jwt options 金鑰

const options = {
    secretOrKey: process.env.APP_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}



passport.use('local', new localStrategy({
    usernameField:'email',
    passwordField:'password'
    }, async(email,password,DC) => {
        const user = await userService.getUser(email);
        if(!user) {
            return DC({ status: 404, message: '沒有該用戶'},false)
         }
        if(password !== user.password){
            return DC({status:404,message:'密碼錯誤!'},false)
        }
        return DC(null, user);
    }
));

passport.use(new jwtStrategy(options, (payload, callback)=>{
    // expireTime, id
    const status = calcExpireTime(payload);
    if (!status){
        return callback({status:404,message:'Token 到期 請重新登入!'})
    }
    return callback(null, payload)
}))

const calcExpireTime = (payload) =>{
    const {expireTime} = payload;
    const currentTime = new Date().getTime();

    if(currentTime > expireTime){
        return false;
    }
    return true;
}

export default passport;