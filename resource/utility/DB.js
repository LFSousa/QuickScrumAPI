const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const dbModel = require('../model/constructor');
const config = require('../constant/config');

const adapter = new FileSync(config.dbLocation);
const db = low(adapter);

db.defaults(dbModel)
  .write()

function DB() {

}

module.exports = DB;