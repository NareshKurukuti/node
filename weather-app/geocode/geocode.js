	
const request = require('request');

var geocodeAddress = (address) => {
	
	
	var  encodedAddress = encodeURIComponent(address);  

	request({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
			json:true
		}, (error, response, body) => {   
			if(error) {
				callback('Unable to Connect to Google Servers'); 
				//console.log('Unable to Connect to Google Servers');
			}else if(body.status === "ZERO_RESULTS") {
				//callback('Unable to find the that address'); 
				console.log('Unable to find the that address');
			} else if(body.status === "OK") {
				/* callback(undefined, {
					address: body.results[0].formatted_address,
					Latitude: body.results[0].geometry.location.lat,
					Longitude: body.results[0].geometry.location.lng
				}); */
				//console.log(JSON.stringify(response, undefined, 2));
				console.log('Address', `${body.results[0].formatted_address}`);
				console.log('Latitude', `${body.results[0].geometry.location.lat}`);
				console.log('Longitude', `${body.results[0].geometry.location.lng}`);
			} 
	});
}
	
module.exports = {
	geocodeAddress
}
