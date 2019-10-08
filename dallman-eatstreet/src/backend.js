//  
var request = require("request");
var APIkey = 'CAmpQVyrXmV7zpBu1UKUlZnw9OQaNSqyodOMJL37KfsJcN2GgE7KR4nfF0b8beJm';

module.exports = {

    getZipInfo : function(zipcode) {

        var options = { method: 'GET',
        url: 'http://www.zipcodeapi.com/rest/' + APIkey + '/info.json/' + zipcode + '/degrees',
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.parse(body));
        });


    },

    zipCodesDistance : function(zip1, zip2, distance) {
        var options = { method: 'GET',
        url: 'http://www.zipcodeapi.com/rest/' + APIkey + '/match-close.json/' + zip1 + ',' + zip2 + '/' + distance + '/mi',
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.parse(body));
        });
    }
}

require('make-runnable');
