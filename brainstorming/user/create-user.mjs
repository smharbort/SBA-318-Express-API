import express from "express"
const router = express.Router()

import users from "../../data/users.mjs"

router
    .route("/")
    .get((req, res) => {
        res.json("yo")
    })

export default router