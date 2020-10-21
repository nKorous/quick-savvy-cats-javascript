const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()
router.use(bodyParser.json())
const db = require('./database')

router.get('/login/:id/:pw', async (req, res) => {
    const id = decodeURI(req.params.id)
    const pw = decodeURI(req.params.pw)

    let findUser = db.get('users').find({email: id, password: pw})
    res.send(findUser)
})

router.get('/:id', async (req, res) => {
    const id = decodeURI(req.params.id)
    try {
        let returnUser = db.get('users').find({ email: id})
        res.status(200).send(returnUser)
    } catch (err) {
        res.status(500).send({Error: err})
    }
})

router.post('/update/:id', async (req, res) => {

})

module.exports = router