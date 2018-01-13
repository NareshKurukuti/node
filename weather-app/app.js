console.log('Staring weather app'); 

const yargs = require('yargs');

const gecode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
			a: {
				demand:true,
				alias: 'address',
				describe: 'Address to fetch weather for',
				string: true
			}
		})
		.help()
		.alias('help', 'h')
		.argv;
		
gecode.geocodeAddress(argv.address  , ( errorMessage, result) => {
	if(errorMessage) {
		console.log(errorMessage);
	}else {
		//console.log(JSON.stringify(results, undefined, 2));
		console.log(result.address); 
		weather.getWeather(result.latitude, result.langitude,  (errorMessage, weatherResult)=> {
			if(errorMessage) {
				console.log(errorMessage);
			}else {
				console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}`);
			}
		});
	}
});





/* const request = require('request');
//fb87c3ef67b517623348d0a7dc230b4c	
request({
	url: 'https://api.darksky.net/forecast/fb87c3ef67b517623348d0a7dc230b4c/73.8267,77.4233',
	json:true
	
}, (error, response, body) => {
		if(error) {
			console.log('Unable to Connect the Forecast.io server');
		}else if(response.statusCode === 400) {
			console.log('Unable to fetch weather');
		}else if(!error && response.statusCode === 200) { 
			console.log(body.currently.temperature);
		}else {
			console.log('Unable to fetch temperature');
		}
}) */