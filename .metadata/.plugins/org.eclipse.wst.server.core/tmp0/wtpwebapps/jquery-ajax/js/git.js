$(document).ready(function() {
	
	$.ajax({
		
		url: "https://api.github.com/users"
		
	}).then(function(data) {
		console.log("Loading");
		var table = $("#usersTable");
		var contents = "";
		$.each(data, function(idx) {
			contents +=  "<tr>";
			contents += "<td>" + data[idx].id + "</td>";
			contents += "<td>" + data[idx].login + "</td>";
			contents += "<td>" + data[idx].followers_url + "</td>";
			var temp_url = data[idx].url;
			var num;
			$.ajax({
				
				url: temp_url
				
			}).then(function(data) {
				num = data.followers;
			}) 
			contents += "<td>" + num + "</td>";
			contents += "<td> <img src='" + data[idx].avatar_url + "' width=50 height=50 /></td>";
			contents += "</tr>";
		})
		table.append(contents);
		
	});
	
});