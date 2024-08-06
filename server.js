require("dotenv").config()

const dataRouter = require("./routers/dataRouter.js")

const http = require("http")
const fs = require("fs")
const server = http.createServer( async (req,res) => {
    await dataRouter(req,res)
})

server.listen(3000, () => {})