import express from "express"
const router = express.Router()

router
    .route("/")
    .get((req, res) => {
        res.send("welcome to the documentation!")
    })

export default router