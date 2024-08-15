import bcrypt from "bcrypt"

import { User } from "../MODEL/userModel.js";
import { generateUserToken } from "../UTILITIS/generateToken.js";

// For User Creating...

export const UserCreate = async (req, res, next) => {
    try {
    
        const { name, email, password, Address, phonenumber, drivinglicencenumber, paymentmethodes } = req.body
        if (!name || !email || !password || !Address || !phonenumber || !drivinglicencenumber || !paymentmethodes) {
            return res.status(400).json({ success: false, message: `all fields required` });
        }

        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);

        //for storing to DB-make a instance

        const newUser = new User({ name, email, hashedPassword, Address, phonenumber, drivinglicencenumber, paymentmethodes })
        await newUser.save() // saving to db


        //Token creation For Authentication.using with email
        //calling from generateToken
        const token = generateUserToken(email);

        //for saving cookie
        res.cookie('token', token);
        //sucess message
        res.json({ success: true, message: "user created suceessfully" })


    } catch (error) {
        res.status(error.status ||500).json({ message:error.message||'internal error'});

    }
}



// For user login
export const UserLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ success: false, message: `all fields required` });
        }
        // email through cheaki in db
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ success: false, message: "user already exist exist" })
        }
        //compare password

        const passwordMatch = bcrypt.compareSync(password, userExist.password)
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "User not authenticated" })
        }

        const token = generateUserToken(email);

        //for saving cookie
        res.cookie('token',token);
        //sucess message
        res.json({ success: true, message: "user Login suceessfully" })


    } catch (error) {
        res.status(500).json({ message: "Internal server" });


    }
}


//user profile
export const UserProfile = async (req, res, next) => {
    try {
        
       const {id}=req.params;
       const userdata = await User.findById(id);

res.json({success:true,message:"user data fetched",data:userdata})



    } catch (error) {
        res.status(500).json({ message: error.message|| "Internal server" });


    }
}

// Check user authentication
export const cheackUser = async (req, res, next) => {
    try {
        const user = req.user;

        // If user is not authenticated, return an error
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not authenticated' });
        }

        // If user is authenticated, send success response
        return res.json({ success: true, message: "User authenticated" });
    } catch (error) {
        // Handle any unexpected errors
        return res.status(500).json({ message: error.message || "Internal server error" });
    }
};
