const request = require('request');

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request ({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=hhARyAjcGamnYAa7fpiwyO8HrE69F6ai&location=${encodedAddress}`,
        json: true
    }, (error, response, body) =>{
        if (error){
            callback('Error:' + error);
        }
        else if (!body){
            callback('cannot find the address');
        }
        else if (body.info.statuscode === 0){
            callback(undefined,
                {
                    address : body.results[0].providedLocation.location,
                    lat :body.results[0].locations[0].displayLatLng.lat,
                    lng : body.results[0].locations[0].displayLatLng.lng
                });
            // console.log(`Address: ${body.results[0].providedLocation.location}`);
            // console.log(`lat=${body.results[0].locations[0].displayLatLng.lat} lng=${body.results[0].locations[0].displayLatLng.lng}`);
        }
        else{
            console.log('ELSE');
        }
        
        //console.log(JSON.stringify(body,undefined,2));
    });
};

module.exports.geocodeAddress = geocodeAddress;




