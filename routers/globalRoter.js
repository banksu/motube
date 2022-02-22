import express from "express";
import { home, join, login, searchPage } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", searchPage);

export default globalRouter;
