require("dotenv").config()

const http = require("http")
const PORT = 42780

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader("content-type", "text/plain")
    res.end("Hello")
})

server.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})