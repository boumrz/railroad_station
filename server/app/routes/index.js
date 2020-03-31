const noteRoutes = require('./note_routes');
module.exports = function(app, client) {
    noteRoutes(app, client);
    // Тут, позже, будут и другие обработчики маршрутов 
};