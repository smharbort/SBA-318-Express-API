import express from "express"
const router = express.Router()

import questions from "../../data/html-css.mjs"

router
    .route("/")
    .get((req, res) => {
        
        if ("hateoas" in req.query) {

            const qNum = Math.floor(Math.random() * questions.length)
            res.redirect(`/quizzes/html-css/${qNum}`)
        } else {

            res.send("don't forget to query this url path with ?hateoas=true")
        }
    })

router
    .route("/:qNum")
    .get((req, res) => {

        const qNum = req.params.qNum

        const question = questions[qNum].question
        const options = questions[qNum].options
        const correct = questions[qNum].correct
        const answNum = questions[qNum].answNum

        let response = { question, options }
        
        if ("answer" in req.query) {
            
            const qGuess = req.query.answer
            let result = { youGuessed: qGuess, isCorrect: qGuess == answNum, answer: correct }

            response = { question, options, result }
        }

        res.json(response)
    })

export default router