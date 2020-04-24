$(document).ready(function() {
	
	$("#ok").click(function() {
		var zipCode = $("#zipcode").val();	
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=81bfac78a37ddc53602fff3c404970b5",
			type:"get",
			success: succFunction
		})			
		function succFunction(data) {
			console.log(data);
			var city = data.name;
			var min_temp = data.main.temp_min;
			var max_temp = data.main.temp_max;
			var content = "";
			content +="City: "+city+"<br><br>Min_temp:" +min_temp+"<br><br>Max_temp:"+max_temp;

			console.log(content);
			
			document.getElementById("res").innerHTML = content;	
			
		}
	})
	
})
