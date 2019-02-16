const routes = require("../../resource/constant/routes");
const log = require("../../resource/utility/log");
const Project = require("../../resource/model/project");

module.exports = app => {

    let projectDAO = app.dao.project;

    app.get(routes.get_projects, (req, res) => {

        res.json(projectDAO.read());
    })

    app.post(routes.add_project, (req, res) => {


        try {
            projectDAO.write(new Project(req.body));
            res.json();
        } catch (e) {
            log.error(e);
            res.json({error: e.message, file: __filename});
        }
    })

}