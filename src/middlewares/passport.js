import passport from 'passport';
import localStrategy from 'passport-local';
import userService from '../services/user';



passport.use(new localStrategy({
    usernameField:'email',
},(async(email,DC) => {
   const user = await userService.getUser(email);
   if(!user) {
       return DC({ status: 400, message: '沒有該用戶'})
   }
   return DC(null, user);
})));
export default passport;