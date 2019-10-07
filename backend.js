//db-fiddle.com/f/t18DNCzRaR3hmLkuPVM4Sd/0
var request = require("request");

module.exports = {

    getZipInfo : function(zipcode) {

        var options = { method: 'GET',
        url: 'http://www.zipcodeapi.com/rest/6mW7gW5KQYV2X0GBwhf0phgli4bOihjIAVJWTca6yo0G06xTybWs75vjWm0aqC1J/info.json/' + zipcode + '/degrees',
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.parse(body));
        });


    }
}

require('make-runnable');
