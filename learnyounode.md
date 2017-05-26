### My Solutions to - [LearnYouNode](https://github.com/workshopper/learnyounode)

* [Hello World](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_01program.js)
* [baby Steps](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_02program.js)
* [My First I/O](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_03program.js)
* [My First Async I/O](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_04program.js)
* [Read files from given directory with extension filter](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_05program.js)
* [File](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_05program.js) filter [module](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/mymodule.js)
	- Create custom module which has a function to filter files from given directory.
	- Import this module in a file & use it with a call back function.
	- [File](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_05program.js) which consumes custom module
	- Custom [module](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/mymodule.js)
* [HTTP-Get](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_07program.js)
	- Create http-get request
	- Set response encoding
	- Logging response
	- Setting event-handler on response object for `data` & `error` events
	- Setting event-handler on http-get object for `error` event
* [Use buffer list to handle data of http-get](https://github.com/sag333ar/LearningNodeJS/blob/master/learnyounode/_06program.js)
	- Create http-get request
	- Create buffer list
	- invoke `pipe` function of `response`
	- append received data from response-pipe to object of buffer-list
	- on-response-end event, log buffer-list object after converting it to string.