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
            res.json().status(201);
            log.info("New project inserted:", req.body.id)
        } catch (e) {
            res.json({error: e.message, file: __filename}).status(409);
        }
    })

    app.delete(routes.remove_project, (req, res) => {

        try {
            projectDAO.remove(req.params.id);
            res.json();
            log.info("Project deleted:", req.body.id)
        } catch (e) {
            res.json({error: e.message, file: __filename}).status(404);
        }
    })

    app.put(routes.edit_project, (req, res) => {

        try {
            
            let project = new Project(req.body);
            if(project.id == req.params.id){

                projectDAO.put(project);
                res.json().status(201);
                log.info("Project updated:", req.body.id)
            } else {

                res.json({error: "ids isnt the same"}).status(409);
                return;
            }
        } catch (e) {
            res.json({error: e.message, file: __filename}).status(409);
        }
    })

}