'use strict';

module.exports = function (app) {
    var rp = require('request-promise');

    return {
        list: function () {
            return rp({
                uri: "https://api.github.com/orgs/moreliahacks/repos",
                method: "GET",
                headers: {
                    'User-Agent': 'Morelia-Hacks-App'
                }
            }).then(function(data){
                return {
                    respos: data
                };
            });
        }
    };
};
