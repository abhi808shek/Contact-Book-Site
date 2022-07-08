const bcrypt = require('bcrypt');

const hashedPassword = async(password)=>{
  const salt = await bcrypt.genSalt(10) 
    const hashpass = await bcrypt.hash(password, salt)
    password=hashpass;
    return password;
}

module.exports = hashedPassword;