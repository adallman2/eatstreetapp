//  
var request = require("request");
var APIkey = 'js-Zq4qNoX3ubrZ5CasQX3e9iBXQhBFxoXpmDKSFOZc9AkVvKx5CG70HCaZFcKQBNes';

module.exports = {

    getZipInfo : async function(zipcode) {

        var options = { 
        headers : {

        },
        method: 'GET',
        url: 'http://www.zipcodeapi.com/rest/' + APIkey + '/info.json/' + zipcode + '/degrees'
        };

        return new Promise((resolve, reject) => {
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
        
                console.log(JSON.parse(body));
                resolve(JSON.parse(body));
                });
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
    },

    zipDistanceButton : function(zip1, zip2, opt1, opt2) {
        console.log("made it " + zip1);
    }
}

require('make-runnable');
