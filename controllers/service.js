'use strict';

module.exports = function(app){

    var Service     = app.dao.Service
    ,   json    = new app.views.Json();

    return {
        list: function(req, res, next){
            var service = new Service();
            json.promise(service.list(), res, next);
        }
    };

};
