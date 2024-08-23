const User = require("../models/User.js");
const OTP= require("../models/otp.js");

// Send Otp
exports.sendotp=async(req,res)=>{
    try {
        // fetch email frm request body
    const {email}=req.body;

    const checkUserPresent= await User.findOne({email});

    // if user alredy exit
    if(checkUserPresent){
        return res.status(401).json({
            success:false,
            message:'user alredy exit',
        })
    }
    
    // genrate otp 
    var otp=otpGenerator.generate(6,{
        upperCaseAlphabtes:false,
    });
    console.log("OTP generatted",otp);

    // check unique otp
    let result=await OTP.findOne({otp: otp});

    while(result){
        otp=otpGenerator(6,{
            upperCaseAlphabtes:false,
        });
        result = await OTP.findOne({otp: otp});
    }

    // const otpPayload
    const otpPayload={email,otp};
    // create entry point 
    const otpBody= await OTP.create(otpPayload);
    console.log(otpBody);

    } catch (error) {
        
    }
}

// signup
exports.signUp = async(req,res)=>{
    // data fecth from request body
    const {
        firstname,
        lastname,
        email,
        password,
        accountType,
        additionalDetails,
        contactNumber
    } = req.body;

    // validate krlo
    if(!firstname || !lastname || !email || !password || !confirmPassword){
        return res.status(403).json({
            success:false,
            message:"All fields are required",
        })
    }
}