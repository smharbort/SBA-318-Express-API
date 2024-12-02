// stealing request logging middleware from RESTful API lab
function logReq (req, res, next) {

    const time = new Date()

    console.log(`-----${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`)

    if (req.body) {
        console.log("Containing the data:")
        console.log(`${JSON.stringify(req.body)}`)
    }
    next()
}

export default logReq