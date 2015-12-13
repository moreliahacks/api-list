'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('org.moreliahacks.list')
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run().catch(function(data){
        console.log(data);
    });
