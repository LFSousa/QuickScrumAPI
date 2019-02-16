const routes = require("../../resource/constant/routes");
const log = require("../../resource/utility/log");

module.exports = app => {

    let projectDAO = app.dao.project;
    app.get(routes.get_projets, (req, res) => {

        res.json(projectDAO.read());
    })
}