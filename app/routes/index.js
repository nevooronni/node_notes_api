const noteRoutes = require('./note_routes');

module.exports = function(app, db) { 
  //routes groups go here where they are wrapped with app instance and the db
  noteRoutes(app, db)
};