import { Router } from "express";
import Controller from "./contoller.js";
const router = new Router()

router.post('/users', Controller.createName)

export default router 