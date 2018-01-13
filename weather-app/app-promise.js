const axios = require('axios');


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
		
var encodeAddress = encodeURIComponent(argv.address);
var geocodeurl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeAddress;

axios.get(geocodeurl).then((response) => { 
	if(response.data.status === 'ZERO_RESULTS') {
		 throw new Error('Unable to find that address');
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng; 
	var weatherUrl ='https://api.darksky.net/forecast/fb87c3ef67b517623348d0a7dc230b4c/'+lat+','+lng;
	 
	return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log('TEMPERATURE', temperature);
	console.log('APPARENTTEMPERATURE', apparentTemperature);
}).catch((e) => { 
		if(e.code === "ENOTFOUND") {
			console.log('Unable to Connect to API servers.');
		}else {
			console.log(e.message);
		}
})
