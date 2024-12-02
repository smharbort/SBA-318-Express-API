import express from "express"
const app = express()

import bodyParser from "body-parser"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "pug")
app.set("views", "./views")

// import utility middleware here
import logReq from "./utilities/log-request-time-&-body.mjs"
app.use(logReq)

// import routes here
import html_css from "./routes/quizzes/html-css.mjs"
app.use("/quizzes/html-css", html_css)
import js_intro from "./routes/quizzes/js-intro.mjs"
app.use("/quizzes/js-intro", js_intro)
import create_your_own from "./routes/user/create-your-own.mjs"
app.use("/user/create-your-own", create_your_own)
import your_quizzes from "./routes/user/your-quizzes.mjs"
app.use("/user/your-quizzes", your_quizzes)
import guide from "./routes/guide.mjs"
app.use("/guide", guide)

app.get("/", (req, res) => {

    const links = [
        {
            href: "/guide",
            rel: "guide",
            type: "GET"
        },
        {
            href: "/quizzes",
            rel: "quizzes",
            type: "GET"
        },
        {
            href: "/user",
            rel: "user",
            type: "GET"
        }
    ]

    res.json(links)
})

app.get("/quizzes", (req, res) => {

    const links = [
        {
            href: "/quizzes/html-css?hateoas=true",
            rel: "html-css",
            type: "GET"
        },
        {
            href: "/quizzes/js-intro?hateoas=true",
            rel: "js-intro",
            type: "GET"
        }
    ]
    res.json(links)
})

app.get(["/api", "/docs", "/documentation"], (req, res) => {

    res.redirect("/guide")
})

app.get(["/create-your-own", "/create", "/your-quizzes", "/my-quizzes"], (req, res) => {
    
    res.redirect("/user")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})