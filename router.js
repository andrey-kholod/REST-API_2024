import { Router } from "express";
import Controller from "./contoller.js";
const router = new Router()

router.post('/users', Controller.createName)
router.get('/all', Controller.findAll)


export default router 