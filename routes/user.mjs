import express from "express"
const router = express.Router()

import users from "../data/users.mjs"
import { User, Question } from "../classes/users-structure.mjs"

// /user
router
    .route("/")
    .get((req, res) => {

        const links = [
            {
                href: "/user/create-user",
                rel: "create-user",
                type: "GET"
            },
            {
                href: "/user/create-quiz",
                rel: "create-quiz",
                type: "GET"
            },
            {
                href: "/user/play-created",
                rel: "play-created",
                type: "GET"
            }
        ]
        res.json(links)
    })

// user/create-user
router
    .route("/create-user")
    .get((req, res) => {
        
    })
    .post((req, res) => {
        if ("userId" in req.query) {
            
        }
        res.json(users)
    })

// user/create-quiz
router
    .route("/create-quiz")
    .get((req, res) => {
        res.render("create-your-own", {})
    })

export default router