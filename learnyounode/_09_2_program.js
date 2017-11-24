// 1. load http module
var http = require('http')

// 2. load buffer list module
var bl = require('bl')

// 3. declare results array
var results = []

// 4. a count to maintain executed services
var count = 0
    
// 5. a function to log responses    
function printResults () {
   for (var i = 0; i < 3; i++) {
     console.log(results[i])
   }
}

// 6. a function to execute web-service/http-get url request     
function httpGet (index) {
    
    // 7. execute http-get with url
    http.get(process.argv[2 + index], function (response) {
        
        // 8. pipe the response
        response.pipe(bl(function (err, data) {

          // 9. handle error
          if (err) {
            return console.error(err)
          }
    
          // 10. store response at index
          results[index] = data.toString(i)

          // 11. increment count, once response is received.
          count++
    
          // 12. once done receiving response for all requests, log it
          if (count === 3) {
            printResults()
          }
      })) // end of response-pipe
   }) // end of http-get
}
 
// 13. invoke above custom http-get function 3 times   
for (var i = 0; i < 3; i++) {
   httpGet(i)
}
