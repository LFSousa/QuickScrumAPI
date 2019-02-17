const { ObjectModel } = require("objectmodel");

module.exports = new ObjectModel({
    "id": String,
    "project_id": String,
    "name": String,
    "description": String,
    "start": String,
    "end": String
});