import express from "express";
import {
  trending,
  uproadVideo,
  watchVideo,
  editVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", trending);
videoRouter.get("/uproad", uproadVideo);
videoRouter.get("/:id", watchVideo);
videoRouter.get("/:id/edit", editVideo);

export default videoRouter;
