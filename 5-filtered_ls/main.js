// node main.js dir txt
var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];


fs.readdir(path, function(err, files){
	if(err){
		console.log(err);
	}
	files = files.filter(function(file){
		var extDot = file.indexOf('.');
		if(extDot == -1){extDot=file.length-1;}
		return file.substring(extDot+1) == ext;
	});
	files.forEach(function(file){
		console.log(file);
	});
});
