#!/usr/bin/env node

var program = require('commander');
var pkg = require('./package.json');

program
  .version(pkg.version);
  /*.option('-u, --user', 'username')
  .option('-p, --password', 'password')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')*/

program
	.command('login')
	.option('-u, --username <username>', 'Username')
	.option('-p, --password <username>', 'Username')
	.description('authenticate against asimov deploy')
	.action(function(options) {
	});

program.parse(process.argv);


function login(options) {
	if (!(options.username && options.password)) {
		console.error();
		console.error('  error: username and password are required');
		console.error();
		process.exit();
	}
}

/*var restify = require('restify');
var client = restify.createJsonClient({
	url: 'http://localhost:3333'
});

client.basicAuth('miso', 'test');

client.get('/units/list', function(err, req, res, obj) {
	console.log("Error:", err);
	console.log("Response", obj);
});

var io = require('socket.io-client'),
socket = io.connect('', {
    port: 80
});

socket.on('connect', function () {
  console.log("socket connected");

  socket.on('agent:log', function(data) {
    //console.log('agent:log', data);
  });

  socket.on("agent:event", function(data) {
    //console.log('agent:event', data);
  });
});
*/