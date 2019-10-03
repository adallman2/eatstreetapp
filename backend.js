var request = require("request");

module.exports = {

    getZipInfo : function(zipcode) {

        var options = { method: 'GET',
        url: 'http://www.zipcodeapi.com/rest/5pBEn5IMfU0ZVOClCd979kkirCTDo6y76loU7Ur0K0CFx387WYqKAQ1bEeITlb6k/info.json/' + zipcode + '/degrees',
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.parse(body));
        });


    }
}

require('make-runnable');
