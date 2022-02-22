import express from "express";
import morgan from "morgan";
import globalRouter from "../routers/globalRoter";
import userRouter from "../routers/userRouter";
import videoRouter from "../routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/video", videoRouter);
app.use("/user", userRouter);
app.use("/", globalRouter);

function handleListening(req, res, next) {
  console.log("Server Listening on port 4000");
}

app.listen(PORT, handleListening);
