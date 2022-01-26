/* COVID-19 API*/
function myFunction() {
	fetch('https://api.covid19api.com/summary')
	.then(function(resp) {return resp.json()}) // Convert data to json
	.then(function(data) { 
		var x = document.getElementById("dropdown").value;
		console.log(data);
		console.log(data.Countries[x].Country);
		console.log(data.Countries[x].TotalDeaths);
		document.getElementById("land").innerHTML = (data.Countries[x].Country);
		document.getElementById("datum").innerHTML = (data.Countries[x].Date);
		document.getElementById("doden").innerHTML = (data.Countries[x].NewDeaths);
		document.getElementById("besmettingen").innerHTML = (data.Countries[x].NewConfirmed);
		document.getElementById("genezen").innerHTML = (data.Countries[x].NewRecovered);
		document.getElementById("totaaldoden").innerHTML = (data.Countries[x].TotalDeaths);
		document.getElementById("totaalbesmettingen").innerHTML = (data.Countries[x].TotalConfirmed);
		document.getElementById("totaalgenezen").innerHTML = (data.Countries[x].TotalRecovered);
	})
	.catch(function() {}); //catch any errors//
}