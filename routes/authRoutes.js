import express from "express";
import { login, registerUser } from "../controller/userContriller.js";

const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", login);

export default routes;
