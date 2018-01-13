const request = require('request');

var getWeather = (lat, lng) => {
	const request = require('request'); 
request({
	url: 'https://api.darksky.net/forecast/fb87c3ef67b517623348d0a7dc230b4c/${lat},${lng}',
	json:true 
}, (error, response, body) => {
		if(error) {
			//console.log('Unable to Connect the Forecast.io server');
			callback('Unable to Connect the Forecast.io server');
		}else if(response.statusCode === 400) {
			//console.log('Unable to fetch weather');
			callback('Unable to fetch weather');
		}else if(!error && response.statusCode === 200) {  
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			})
			//console.log(body.currently.temperature);
		}else {
			console.log('Unable to fetch temperature');
		}
	})
};

module.exports = {
	getWeather
};