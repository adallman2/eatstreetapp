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

    zipCodesDistance : async function(zip1, zip2, distance, unit) {
        var options = { method: 'GET',
        url: 'http://www.zipcodeapi.com/rest/' + APIkey + '/match-close.json/' + zip1 + ',' + zip2 + '/' + distance + '/' + unit,
        };

        console.log(options);

        return new Promise((resolve, reject) => {
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
        
                console.log(JSON.parse(body));
                resolve(JSON.parse(body));
                });
        });
    },

     zipDistanceButton : async function(zip1, zip2, distance, mi, km) {
        if (mi == true) {
            return await this.zipCodesDistance(zip1, zip2, distance, "mile");
        }
        else return await this.zipCodesDistance(zip1, zip2, distance, "km")
    }
}

require('make-runnable');
