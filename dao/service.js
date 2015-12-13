'use strict';

module.exports = function(app){

    var service = new app.models.Service();

    return {
        list: function(){
            return service.list();
        }
    };

};
