
// 1. load http module
var http = require('http')

// 2. create get request & closure for on-receive-response
var get = http.get(process.argv[2], function(response) {

	// In case, if you wish to log status code
	// console.log('response code is ' + response.statusCode)

	// 3. To set response Encoding
	response.setEncoding('utf8')

	// 4. What to do with data received
	response.on('data', console.log)

	/* or you can write following instead step 3+4
	response.on('data', function(data) {
		var string = data.toString()
		console.log(string)
	})
	*/

	// 5. what to do with error
	response.on('error', console.error)

	/* or you can write following instead step 5
	response.on('error', function(error) {
		console.error(error)
	}) 
	*/ // on-error event for response
})

// 6. set event-handler on-error event for http-get
get.on('error', function(error){
	console.log('Got error ' + error.message)
})