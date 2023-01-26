
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')
const task = require('../model/task')
const users = require('../model/users')

const userLogin = async(req, res) => {
  try{
    console.log("entered admin longi",req.body);
    const { userName, password,email} = req.body;

    let UserEmail =await users.find({email:email})
    if(UserEmail.length>0){
      //Need to usebcrypt 
      console.log("email..",UserEmail)
      if(UserEmail[0].password===password){
        console.log("acess granted")
        let userId=UserEmail[0]._id
        const UserToken = jwt.sign({ userId },
          "process.env.JWT_USER_SECRET_KEY", {
          expiresIn: "10m",
         })
         let userData={
          userName:UserEmail[0].username,
          email:UserEmail[0].email,
         }
         res.status(200).json({UserToken:UserToken,user:userData})
      }
      else{
        console.log("Wrong password",UserEmail[0].password)
        res.status(401).json({error:"wrong password"})
      }
    }
    else{
      console.log("No email founded")
      res.status(401).json({error:"wrong email"})
    }
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:"something wrong in server"})
  }

};

module.exports = { userLogin };





// const { userName, password,email} = req.body;
// try {
//   if (userName === Username) {
//     if (Password === password) {
//       const token = jwt.sign(
//         { username: userName, auth: true },
//         "process.env.JWT_ADMIN_SECRET_KEY",
//         {
//           expiresIn: "10m",
//         }
//       );

//       res.json({ Admintoken: token, auth: true });
//       console.log("admin verified");
//     } else {
//       res.status(401).json({ error: "Incorrect Passwoard" });
//       console.log("incorrect password");
//     }
//   } else {
//     res.status(401).json({ error: "Incorect username" });
//     console.log("Incorect username");
//   }
// } catch (error) {
//   res.status(500).json({ error: "server error" });
//   console.log("server error", error);
// }

// res.status(200).json({ message: "user" });