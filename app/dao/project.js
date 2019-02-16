const db = require('../../resource/utility/DB');

module.exports = () => {

    let dao = {};
    
    dao.read = () => {

        return db.get('projects').value()
    }

    dao.write = project => {
        
        if(!db.get('projects').find({id: project.id}).value()){

            db.get('projects')
            .push(project)
            .write()
            return true;
        }

        throw new Error(`a project with id ${project.id} already exists`);
    }

    dao.remove = id => {

        if(db.get('projects').find({id: id}).value()){

            db.get('projects')
            .remove({id: id})
            .write()
            return true;
        }

        throw new Error("project not found")
    }

    return dao;
}