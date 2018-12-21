import express from "express";
import routes from "../routes";
import {
  userDetail, 
  editProfile, 
  changePassword
} from '../controllers/userController'

const userRouter = express.Router();

console.log(userDetail);
console.log(editProfile);


console.log(routes.editProfile);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;