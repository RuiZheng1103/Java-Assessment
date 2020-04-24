$(document).ready(function() {
	
	$("#btn").click(function() {
		var lon = $("#longitude").val();
		var lat = $("#latitude").val();
	
		$.ajax({
		
			url: "https://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + lon + "&cnt=20&appid=81bfac78a37ddc53602fff3c404970b5"
			
		}).then(function(data) {
			console.log(data);
			var divTag = $("#content");
			var names = "";
			$.each(data.list, function(idx) {
				var temp = data.list[idx].name;
				console.log(temp);
				names += "<li>" + temp + "</li>";
			});
			divTag.html("<ul>" + names + "</ul>");
			//document.getElementById("content").innerHTML = names;
			//$("#content").html("<ul>" + names + "</ul>");
			//divTag.innerHTML=names;
					
		})
	})
	
})