import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

if (process.env.NODE_ENV !== 'production') {
	Error['stackTraceLimit'] = Infinity;  // Expose more lines from a stack trace

	require('zone.js/dist/long-stack-trace-zone');
}
