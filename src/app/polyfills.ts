import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

//TODO Only enable this in dev mode
Error['stackTraceLimit'] = Infinity; //Expose more lines from a stack trace
require('zone.js/dist/long-stack-trace-zone');