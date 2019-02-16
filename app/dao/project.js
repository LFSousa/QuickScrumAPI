const db = require('../../resource/utility/DB');

module.exports = () => {

    let dao = {};
    
    dao.read = () => {
        return db.get('projects').value()
    }

    return dao;
}