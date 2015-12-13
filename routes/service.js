'use strict';

module.exports = function (app) {

    var service = new app.controllers.Service();

    return [
        {
            method: 'get',
            url: '/service',
            action: service.list,
            cors: true
        }
    ];

};
