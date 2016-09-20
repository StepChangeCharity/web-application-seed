const exec = require('child_process').exec;
const kill = require('tree-kill');

const server = exec('npm run jsonserver');
const tests = exec('npm run e2e:run');

tests.stdout.on('data', function(data) {
	console.log(data);
});

tests.stderr.on('data', function(data) {
	console.log(data);
});

tests.on('close', function(code) {
	console.log('closing code: ' + code);
	kill(server.pid, 'SIGKILL');
	process.exit(code);
});