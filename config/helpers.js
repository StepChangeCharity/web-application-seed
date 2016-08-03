// ## Helpers methods for the webpack build process

var path = require('path');
var proc = require('process');

// Get the path to the root of the project
const ROOT = path.resolve(__dirname, '..');

// Build a path from the project root using the given array of strings
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

function hasShouldFlattenArgument() {
    let flatten = false;

    process.argv.forEach(function(item) {
        if (item == 'flatten') {
            flatten = true;
        }
    });

    return flatten;
}

function flatten(filename) {
    let shouldFlatten = hasShouldFlattenArgument();

    if (shouldFlatten) {
        return '';
    } else {
        return root(filename);
    }
}

module.exports = {
    root: root,
    flatten: flatten
};

