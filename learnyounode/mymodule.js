// 1. load file system module
var fs = require('fs')

// 2. load path module
var path = require('path')

// 3. Module exports following function
// It takes folder as parameter which folder to look-through
// It takes ext as parameter to filter
// It takes call-back-function with params error, files(string) 
module.exports = function (folder, ext, callback) {
	// 4. Read directory
	fs.readdir(folder, function (err, files) {
		// 5. Handle error
		if (err) {
			// 6. Rethrow error
			return callback(err, null)
		}

		// 7. filter files
		files = files.filter(function (file) {
			return path.extname(file) === ('.' + ext)
		})

		// 8. return array with no error
		callback(null, files)

/* Old solution
		// 7. Create empty array & use this to return array
		var array = []
		files.forEach(function (file) {
			// 8. If extension matches
			if (path.extname(file) == '.' + ext) {
				// 9. push it to array
				array.push(file)
			}
		})
		// 10. return array with no error
		return callback(null, array)
*/

	}) // fs.readdir - complete
} // exports - function - complete
