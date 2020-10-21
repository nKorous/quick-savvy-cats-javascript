/*** Serving the API */
const API = require('express')()
const cors = require('cors')

const user = require('./user')

const API_PORT = process.env.PORT || 8888

API.listen(API_PORT, () => console.log(`API Listening on ${API_PORT}`))

API.use(cors())
API.use('/api/user', user)

/*** Serving the Client */
const CLIENT_Express = require('express')
const CLIENT = CLIENT_Express()

const CLIENT_PORT = 5200

const staticDist = "./dist/savvy-cats-smart-pump";

CLIENT.use(CLIENT_Express.static(staticDist));

CLIENT.listen(CLIENT_PORT, () => console.log(`Open the browser to HTTP://localhost:${CLIENT_PORT}/ for dev`))

CLIENT.get('/', (req, res) => {
    res.sendFile("index.html", { root: staticDist });
})