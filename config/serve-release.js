console.log("STARTED!");

const exec = require('child_process').exec;

const server = exec('npm run serve:release');

server.stdout.on('data', function(data) {
  console.log(data);
});
server.stderr.on('data', function(data) {
  console.log(data);
});