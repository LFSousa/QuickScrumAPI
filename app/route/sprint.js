const routes = require("../../resource/constant/routes");
const log = require("../../resource/utility/log");
const Sprint = require("../../resource/model/sprint");

module.exports = app => {

    let sprintDAO = app.dao.sprint;
    let projectDAO = app.dao.project;

    app.get(routes.get_sprints, (req, res) => {

        res.json(sprintDAO.read(req.params.project_id));
    })

    app.post(routes.add_sprint, (req, res) => {

        try {
            if(projectDAO.getByID(req.body.project_id)){

                sprintDAO.write(new Sprint(req.body));
                res.json().status(201);
                log.info("New sprint inserted:", req.body.id);
            } else {
                res.json({error: "project not found"}).status(404);
            }
        } catch (e) {
            res.json({error: e.message, file: __filename}).status(409);
        }
    })

    app.delete(routes.remove_sprint, (req, res) => {

        try {
            sprintDAO.remove(req.params.id);
            res.json();
        } catch (e) {
            res.json({error: e.message, file: __filename}).status(404);
        }
    })

}