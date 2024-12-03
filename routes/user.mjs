import express from "express"
const router = express.Router()

// import users from "../data/users.mjs"
// import { User, Question } from "../classes/users-structure.mjs"

//              /user
router
    .route("/")
    .get((req, res) => {

        const links = [
            {
                href: "/user/create-quiz",
                query_option: "?userId=enterYours",
                // rel: "create-quiz",
                type: "GET"
            },
            {
                href: "/user/play-created",
                // rel: "play-created",
                type: "GET"
            }
        ]
        res.json(links)
    })

//              /user/create-quiz
router
    .route("/create-quiz")
    .get((req, res) => {

        console.log(req.query)

        let userId
        if ("userId" in req.query) {

            userId = req.query.userId
        } else {

            userId = Math.floor(Math.random() * 100)
        }
        res.redirect(`/user/create-quiz/${userId}`)
    })

//              /user/create-quiz/:userId
router
    .route("/create-quiz/:userId")
    .get((req, res) => {

        const userId = req.params.userId

        res.render("create-your-own", { userId })
    })
    .post((req, res) => {                               // STILL WORKING ON POST, PATCH, DELETE FUNCTIONALITY

        /* if (("category" in req.body) && ("question" in req.body) && ("options" in req.body) && ("correct" in req.body) && ("answNum" in req.body)) {
            
            const userId = req.params.userId

            users.forEach(user => {

                if (userId == user.userId) {

                    
                }
            })
            res.send("not so nice")
        } */
    })

export default router