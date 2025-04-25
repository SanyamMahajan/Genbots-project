import { asyncHandler } from "../utils/asynchHandler.js";


const registerUser = asyncHandler(async (req, res) => {
    //get user details from fronted
    //validation-not empty
    //check if user already exists: username or email
    //check for images, check for avatar
    //upload them to cloudinary
    //create user in database-create entry in db
    //remove password and refresgh token from response
    //check for user creation
    //return user


    const {fullName,email, username,password}=req.body
    console.log("email:",email)

    res.send({
        status: "success",
        message: "User registered successfully",
        data: {
            user: {
                fullName,
                email,
                username,
            },
        },
    })



}
)

export {registerUser}   
