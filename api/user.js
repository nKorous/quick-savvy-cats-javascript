const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()
const db = require('./database')

router.get('/:id', async (req, res) => {
    const id = req.params.id
    let dID = decodeURI(id)
    console.log({id, dID})
    try {
        let returnUser = db.get('users').find({ email: dID})
        res.status(200).send(returnUser)
    } catch (err) {
        res.status(500).send('Error: ', err)
    }
})

module.exports = router