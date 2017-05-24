// 1. load custom module
var mymodule = require('./mymodule')

// 2. filter files with folder & ext with custom module
mymodule(process.argv[2], process.argv[3], function (err, files){

	// 3. handle error
	if (err) {
		return console.error(err)
	}

	// 4. log list of files
	files.forEach(function (file) {
		console.log(file)
	})

})