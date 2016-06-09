System.config({
	transpiler : "typescript",
	typescriptOptions : {
			tsconfig: true
	},
	map : {
    'rxjs': '/node_modules/rxjs',
    '@angular': '/node_modules/@angular',
		'typescript': '/node_modules/typescript/lib/typescript.js'
	},
  packages: {
    'app': {
      main: 'main',
      defaultExtension: 'ts'
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    }
	}
});