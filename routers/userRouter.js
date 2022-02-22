import express from "express";
import {
  logout,
  userDelete,
  userEdit,
  userSee,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", userEdit);
userRouter.get("/delete", userDelete);
userRouter.get("/:id", userSee);

export default userRouter;
