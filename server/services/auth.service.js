
const { User } = require('../models/user');

const createUser = async(email,password) =>  {
   try {
       // check the email doesn't exist
        if(await User.emailTaken(email)){
            throw new Error("Sorry email taken");
        }    
        
        // create a new user
        const user = new User({
            email,
            password
        });
        await user.save();
        return user;
   }catch(error){
      throw error;
   }
}

const genAuthToken = (user) => {
    const token = user.generateAuthToken();
    return token;
}

module.exports = { 
   createUser,
   genAuthToken
}