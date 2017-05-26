// 1. load http module
var http = require('http')

// 2. load buffer-list module
var bl = require('bl')

// 3. create get request & closure for on-receive-response
var get = http.get(process.argv[2], function(response) {

	// In case, if you wish to log status code
	// console.log('response code is ' + response.statusCode)

	// 4. To set response Encoding
	response.setEncoding('utf8')

	// 5. create new buffer list object
	var blist = new bl()

	// 6. pipe function receive data in chunks.
	response.pipe(bl(function (error, data) {
		// 7. handler response
		if (error) {
			return console.error(error)
		}
		// 8. append data-chunk to buffer-list object
		blist.append(data)
	}))

	// 9. once response has ended, 
	response.on('end', function() {
		// 10. convert it to string.
		var string = blist.toString()

		// 11. log the lenth & string itself
		console.log(string.length)
		console.log(string)
	}) // response.on-end
}) // http.get

// 12. set event-handler on-error event for http-get
get.on('error', function(error){
	console.log('Got error ' + error.message)
})