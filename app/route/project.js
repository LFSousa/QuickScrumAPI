const routes = require("../../resource/constant/routes");
const log = require("../../resource/utility/log");

module.exports = app => {

    app.get(routes.get_projets, (req, res) => {
        
        log.info(req);
        res.json()
    })
}