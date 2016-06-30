const exec = require('child_process').exec;

const server = exec('npm run serve:release');
const tests = exec('npm run e2e:release');

tests.stdout.on('data', function(data) {
  console.log(data);
});
tests.stderr.on('data', function(data) {
  console.log(data);
});
tests.on('close', function(code) {
  console.log('closing code: ' + code);
  exec('taskkill /PID ' + server.pid + ' /T /F');
  process.exit(code);
});

