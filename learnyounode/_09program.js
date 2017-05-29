// 1. load http module
var http = require('http')
// 2. load bufferlist module
var bufferList = require('bl')

// 3. create an instance of buffer list module
// which will be used for appending different response data
var bl = new bufferList()


// 4. a function to load data using http-get
function loadData(urlname, callback) {

	// 5. invoke http get with url from parameter
	http.get(urlname, function(response) {

		// 6. set response encoding
		response.setEncoding('utf8')

		// 7. start receiving response in packets
		response.pipe(bufferList(function (error, data){

			// 8. handle errors
			if (error) {
				return console.error(error)
			}

			// 9. append data on receiving response
			bl.append(data)
		}))

		// 10. set event-handler for on-end
		response.on('end', function() {
			// 11. invoke callback with provided url
			callback(urlname)
		})
	})
}

// 12. a function for callback-event response-end
function callbackForURLs(urlname) {
	// 13. if it's last url, we're done loading data
	// let's log the combine response
	if (urlname == process.argv[4]) {
		var string = bl.toString()
		console.log(string)

	// 14. if it's first url, we need to load 2nd url
	} else if (urlname == process.argv[2]) {
		bl.append("\n")
		loadData(process.argv[3], callbackForURLs)
	// 15. if it's 2nd url, we need to load 3rd url 
	} else if (urlname == process.argv[3]) {
		bl.append("\n")
		loadData(process.argv[4], callbackForURLs)
	}
}

// Step 1. take first url & pass it to loadData function with callback
// jump to 4.
loadData(process.argv[2], callbackForURLs)