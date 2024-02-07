import  {Event}  from "../models/event.js"
import { Admin } from "../models/admin.js";
import ErrorHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken";


export const newEvent= async(req,res, next)=>{

    try{
        const {photo, title,  description}=req.body;
        let {name,user}=req.body;
        const decoded = jwt.verify(user, process.env.JWT_SECRET);
         user= decoded.user.id;
         name=decoded.user.name;
         phone=decoded.user.phone;
// console.log(userid)
// console.log("check")
        // const userid = req.user._id;
        await Event.create({
          name,


            photo,

            title,
            description,
      
            user,
        })

        res.status(201).json({
            success: true,
            message: "Event added Successfully",
          });
        } catch (error) {
            next(error);
          }
}

export const getEvent = async (req, res, next) => {
  try {
    // const userid = req.user._id;
// console.log("work")
    const event = await Event.find({ });
    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyEvent = async (req, res, next) => {
  try {

    const userid = req.query.userid;
    // console.log(userid)
    const decoded = jwt.verify(userid, process.env.JWT_SECRET);
//     console.log(decoded)
// console.log("work")
// console.log(decoded.user.id)
    const rooms = await Event.find({user:decoded.user.id});

    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    next(error);
  }
};



  
  export const deleteEvent = async (req, res, next) => {
    try {
      const event = await Event.findById(req.params.id);
  
      if (!event) return next(new ErrorHandler("Event not found", 404));
      await event.deleteOne();
  
      res.status(200).json({
        message: "Event Deleted!",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };