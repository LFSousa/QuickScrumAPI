const db = require('../../resource/utility/DB');

module.exports = () => {

    let dao = {};
    
    dao.read = () => {

        return db.get('sprints').value();
    }

    dao.write = sprint => {
        
        if(!db.get('sprints').find({id: sprint.id, project_id: sprint.project_id}).value()){

            db.get('sprints')
            .push(sprint)
            .write();
            return true;
        }

        throw new Error(`a sprint with id ${sprint.id} on this project already exists`);
    }

    dao.remove = id => {

        if(db.get('sprints').find({id: id}).value()){

            db.get('sprints')
            .remove({id: id})
            .write();
            return true;
        }

        throw new Error("sprint not found");
    }

    return dao;
}