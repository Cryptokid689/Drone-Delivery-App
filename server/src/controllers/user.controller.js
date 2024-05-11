import UserDatabase from "../models/user.models.js";
import { hashPassword, verifyPassword } from "../utils/encryption.utils.js";


export const createNewUser = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        telephone,
        state,
        address,
        isAdmin
      } = req.body
  
      console.log(req.body)
  
      const hashedPassword = await hashPassword(password)
  
      UserDatabase.findOne({ email: email })
      .then((user) => {
        if (user) {
          console.log(user); // Found user
          return res.status(200).json({ok: true, exists: true, body: user})
        } else {
            console.log(`User with email ${email} not found. creating new user...`);
  
            const newUser = new UserDatabase({
              firstName,
              lastName,
              email,
              password: hashedPassword,
              telephone,
              state,
              address,
              isAdmin,
              friends: []
            })
  
            newUser.save().then(() => {
              console.log('New user added successfully');
            }).catch((error) => {
                console.log(error);
              });
  
          return res.status(201).json({ok: true, exists: false, body: newUser})
        }
      })
      .catch((error) => {
        console.log(`Error finding user with email ${email}: ${error}`);
        return res.status(500).json({ok: false, error: error.message})
      });
  
    } catch (error) {
      return res.status(500).json({ok: false, error: error.message})
    }
}
  

export const loginUser = async(req, res) => {
    try {
      const { email, password } = req.body
      console.log(req.body)
      //Check if the user exists by using their email
      const user = await UserDatabase.findOne({ email: email })
      if(!user) {
        return res.status(400).json({ok: false, error: "No account exists with that email" })
      }
  
      //Check if password is correct
      const isPasswordValid = await verifyPassword(user.password, password)
      if(!isPasswordValid) return res.status(400).json({ok: false, error: "Invalid password" })
  
      
      return await res.status(200).json({ ok: true, body: user })
    } catch (error) {
        return res.status(500).json({ ok: false, error: "server error. try again" })
    }
}


export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserDatabase.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}