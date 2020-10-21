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

router.post('/update/:id', async (req, res) => {
    let body = req.body

    let updatedRecord = db.get('users').find({ guid: body.guid }).assign(body).write()
    let record = db.get('users').find({ guid: body.guid })
    if(record) res.status(200).send(record)
    else res.status(500).send({ERR: 'Server Error'})
})

module.exports = router