import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from './router.js';

const app = express();

const handleHome = (req, res) => res.send("Hello from my ass");

const handleProfile = (req, res) => res.send('You are on my profile');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));
app.use("/user", userRouter);

app.get('/', handleHome);
app.get('/profile', handleProfile);

export default app;