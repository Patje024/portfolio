//OpenWeatherMap API Javafile
function weatherBalloon( cityID ) {
	var key = 'c52446526e902dfa769ec09bed957805';
	fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.812565&lon=5.837226&appid=c52446526e902dfa769ec09bed957805')
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
	drawWeather(data); // Call drawWeather
})
	.catch(function() {
	// catch any errors
});
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var celcius1 = Math.round(parseFloat(d.main.feels_like)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;

const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december"
];

let unix_timestamp = d.sys.sunrise
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var sunrise = hours + ':' + minutes.substr(-2)// + ':' + seconds.substr(-2);

let unix_timestamp1 = d.sys.sunset
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp1 * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var sunset = hours + ':' + minutes.substr(-2)// + ':' + seconds.substr(-2);

let unix_timestamp2 = d.dt
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp2 * 1000);
// Hours part from the timestamp
var year = date.getFullYear();
// Minutes part from the timestamp
var month = monthNames[date.getMonth()];
// Seconds part from the timestamp
var day = date.getDate();

// Will display time in 10:30:23 format
var today = day + ' ' + month + ' ' + year;


	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;C';
	document.getElementById('location').innerHTML = 'Nijmegen';
	document.getElementById('feels_like').innerHTML = celcius1 + '&deg;C';
	document.getElementById('wind').innerHTML = d.wind.speed + ' m/s';
	document.getElementById('humidity').innerHTML = d.main.humidity + '%';
	document.getElementById('sunrise').innerHTML = sunrise;
	document.getElementById('sunset').innerHTML = sunset;
	document.getElementById('date').innerHTML = today;

	if( description.indexOf('rain') > 0 ) {
  	document.getElementById('weather').className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.getElementById('weather').className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.getElementById('weather').className = 'sunny';
  }
}

window.onload = function() {
	weatherBalloon( 2750052 );
}