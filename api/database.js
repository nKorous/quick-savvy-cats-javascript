const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


let dataFile = __dirname.replace('/api', '/data/users.json')

const adapter = new FileSync(dataFile)
const db = low(adapter)

module.exports = db