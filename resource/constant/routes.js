module.exports = {
    //PROJECT
    'get_projects': "/projects",
    'add_project': "/project",
    'remove_project': "/project/:id",

    //SPRINTS
    'get_sprints': "/sprints/:project_id",
    'add_sprint': "/sprint",
    'remove_sprint': "/sprint/:id"
}