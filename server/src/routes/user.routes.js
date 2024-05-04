import express from "express"
import { 
    createNewUser, 
    getUser, 
    loginUser 
} from "../controllers/user.controller.js"


const usersRouter = express.Router()

usersRouter.post("/create", createNewUser)
usersRouter.post("/login", loginUser)
usersRouter.post("/:id", getUser)


export default usersRouter