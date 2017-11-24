var net = require('net');

function padding(number) {
	if (number < 10) {
		return  '0' + number;
	} else {
		return number.toString();
	}
}

var server = net.createServer(function(socket) {
	var date = new Date();
	// YYYY-MM-DD hh:mm
	var string = date.getFullYear() + '-' 
		+ padding(date.getMonth()+1) + '-' 
		+ padding(date.getDate()) + ' ' 
		+ padding(date.getHours()) + ':' 
		+ padding(date.getMinutes()) + '\n'
	socket.end(string);
});
server.listen(process.argv[2]);

/**
Official solution

    var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
   
*/