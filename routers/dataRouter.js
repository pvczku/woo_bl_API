const dataHandler = require("../modules/dataHandler.js")
const router = async (req, res) => {
    if (req.method === "POST") {
        if (req.url === "/newOrder") {
            console.log("NOWY!")
            req.on("data", async (data) => {
                const decodedData = await dataHandler.decodeData(data)
                console.log(decodedData)
                res.writeHead(200, {"content-type": "application/json"})
                res.end(JSON.stringify(decodedData))
            })
        }
    }
    else if (req.method === "GET") {
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("could not proccess the request")
    }
        
}


module.exports = router