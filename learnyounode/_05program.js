// Current solution

// 1. load file system module
var fs = require('fs')

// 2. load path module
var path = require('path')

// 3. take folder argument
var folder = process.argv[2]

// 4. build extension from argument
var ext = '.' + process.argv[3]

// 5. read files from given folder
fs.readdir(folder, function(err, files) {

	// 6. Handle error
	if (err) {
		return console.error(err)
	}

	// 7. Iterate through files.
	files.forEach(function (file) {

		// 8. If path matches to expectation, log it
		if (path.extname(file) == ext) {
			console.log(file);
		}
	}) // forEach
}) // readdir

/* Previous solution
var fs = require('fs')
fs.readdir(process.argv[2], function(err, files) {
	if (err) {
		return console.log('Error occured ' + err)
	}
	for(var i=0; i<files.length; i++) {
		var file = files[i];
		var array = file.split('.')
		if (array.length > 0 && array[1] == process.argv[3]) {
			console.log(file);
		}
	}
})
*/