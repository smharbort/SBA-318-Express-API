import express from "express"
const app = express()

import bodyParser from "body-parser"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "pug")
app.set("views", "./views")

//              import utility middleware here
import logReq from "./utilities/log-request-time-&-body.mjs"
app.use(logReq)

//              import routes here
import html_css from "./routes/quizzes/html-css.mjs"
app.use("/quizzes/html-css", html_css)
import js_intro from "./routes/quizzes/js-intro.mjs"
app.use("/quizzes/js-intro", js_intro)
import user from "./routes/user.mjs"
app.use("/user", user)

app.get("/", (req, res) => {

    const links = [
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

app.get("/user", (req, res) => {

    const links = [
        {
            href: "/user/create-quiz",
            rel: "create-quiz",
            type: "GET"
        },
        {
            href: "/user/create-user",
            rel: "create-user",
            type: "GET"
        },
        {
            href: "/user/your-quiz",
            rel: "your-quiz",
            type: "GET"
        }
    ]
    res.json(links)
})

const port = 3000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})