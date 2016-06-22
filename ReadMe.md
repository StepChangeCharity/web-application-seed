# StepChange Angular 2 Web Application Seed

A starter project using Angular 2, TypeScript, Webpack, Jasmine, Karma & Protractor.

## Quick Start

>Warning: Make sure you're using the latest version of Node.js and NPM

```bash
# Clone the repository to your machine
git clone http://fcctfs.cccs.co.uk:8080/tfs/TfsSandpit/FrontEndApplications/_git/WebApplicationSeed MyApplication

# Change the working directory to your application
cd MyApplication

#Install the project dependencies via npm
npm install

# Start the development server
npm start
```

Go to http://localhost:8080 in your browser.

# Table of Contents

* [High Level Features](#high-level-features)
* [Getting Started](#getting-started)
	* [Machine Dependencies](#machine-dependencies)
	* [Creating The Initial Application](#creating-the-initial-application)
	* [Developing](#developing)
	* [Testing](#testing)
	* [NPM Scripts](#npm-scripts)
	* [Dependencies Explained](#dependencies-explained)

# High Level Features

The seed repository has been designed to allow SetpChange developers to get up and running quickly when creating a new front-end application.

It provides all the functionality needed to develop, test and build an application follows Angular 2 best practices as well as establishing a preferred internal coding and architectural structure.

* Best practices in file and application organization for [Angular 2](https://angular.io/styleguide).
* Package management using [npm](https://www.npmjs.com/).
* Build system using [Webpack](https://webpack.github.io/docs/) for working with [TypeScript](http://www.typescriptlang.org/).
* TypeScript coding standard errors reported with [TSLint](http://palantir.github.io/tslint/) and Angular 2 best practice rules assessed with [Codelyzer](https://github.com/mgechev/codelyzer).
* Test Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* End-to-end Angular 2 code using [Protractor](https://angular.github.io/protractor/).

# Getting Started

## Machine Dependencies

What you need to run the application:
* `Git` installation found [here](https://git-for-windows.github.io/)
* `Node.js` and `npm` see this [guide](http://blog.teamtreehouse.com/install-node-js-npm-windows) for installation
	*  Ensure you're running Node `v5.x.x`+) and NPM (`3.x.x`+)

## Creating The Initial Application

Create a new repository in TFS using the adminstration [dashboard](http://fcctfs.cccs.co.uk:8080/tfs/TfsSandpit/FrontEndApplications/_admin/_versioncontrol).

For example creating a new `Portal` repository would result in a location such as http://fcctfs.cccs.co.uk:8080/tfs/TfsSandpit/FrontEndApplications/_git/Portal

```bash
# Clone the seed repository to your machine using the name of the new repository from above at the end
git clone http://fcctfs.cccs.co.uk:8080/tfs/TfsSandpit/FrontEndApplications/_git/WebApplicationSeed Portal

# Change the working directory to the new application folder
cd Portal

# Set the remote origin to the origin of the new repository
git remote set-url origin http://fcctfs.cccs.co.uk:8080/tfs/TfsSandpit/FrontEndApplications/_git/Portal

# Verify this change (you should see the url you just set)
git remote -v

# Push the master branch to the new origin
git push origin master
```

## Developing

For ease of workflow during developing npm `scripts` have been utilised in order to encapsulate common and repetetive tasks.

In general only four scripts will be called directly whilst developing; `install`, `start`, `test` and `e2e`.  These are explained in more detail in the [NPM Scripts](#npm-scripts) section. 

In order to start developing for the first time you need to do the following from the command line in your application folder:

```bash
#Install the project dependencies via npm
npm install

# Start the development server
npm start
```

Once `npm start` has been called a development server is spun up which allows you to view the application in its current state.  To do this visit http://localhost:8080 in your browser.

The development server is created from the `webpack-dev-server` package and creates the files to serve in memory based on the Webpack configuration that it is passed. For more information see the "Dependencies Explained" section. 

By default the `npm start` command serves the development configuration (unoptimised) if you wish to develop against the production version then use `npm start:prod` instead.

Your source files can be debugged through the browser in the normal way.  In the case of Chrome hit `F12` to launch the debugger, in the `'Sources'` tab expand the `'webpack://'` section and the the `'.'` folder.  Here you will find your source files to which breakpoints can be attached.

The development server will also refresh the content of your application whenever you make a change and a notifier has been created which alerts you in the Windows System Tray as to whether the build was subsequently successful (saving you monitoring the console window).

## Testing

> TODO

## NPM Scripts

[npm scripting article](http://www.marcusoft.net/2015/08/pre-and-post-hooks-for-npm-scripting.html)

### preinstall

Called as part of the npm lifecycle hooks before `npm install` is executed.  Installs global dependencies `rimraf` and `webdriver-manager` so they are in your path.

### install (`npm i` | `npm install` | `npm run install`)

Inbuilt npm script action that installs the dependencies and devDependencies which are in their respective areas of the `package.json` file.

### postinstall

Called as part of the npm lifecycle hooks after `npm install` is executed.  Installs any typing definition files saved in the `typings.json` file.

### start (`npm start` | `npm run start`)

Inbuilt npm script action that fires up a Webpack development server in developer mode (unoptimised scripts).

### start (`npm run start:prod`)

Fires up a Webpack development server in production mode (optimised scripts).

### clean:build (`npm run clean:build`)

Deletes the `dist` build folder that is used to contain the production code for deployment.

### clean:dependencies (`npm run clean:dependencies`)

Deletes the `node_modules` and `typings` folders.

### clean:install (`npm run clean:install`)

Uses `clean:build` to wipe the project dependencies down and then reinstalls everything automatically.

### pretest

Called as part of the npm lifecycle hooks before `npm test` is executed. Deletes the `coverage` folder generated by Karma from any previously run tests. 

### test (`npm t` | `npm test` | `npm tst` | `npm run test`)

Runs any `Jasmine` tests (*.spec.ts files) using `Karma` based on the supplied configuration file.

### posttest

Called as part of the npm lifecycle hooks before `npm test` is executed. Generates both HTML and LCOV code coverage reports.

### remaphtml

Called by `posttest`. Uses the remap-istanbul package to generate a HTML code coverage report in the ./coverage folder from the JSON file created during Karma execution. 

### remaplcov

Called by `posttest`. Uses the remap-istanbul package to generate a LCOV code coverage report in the ./coverage folder from the JSON file created during Karma execution. 

### coverage (`npm run coverage`)

Opens the HTML coverage report generated by the most recently run Karma test from the ./coverage folder, using the http-server package. 

### pree2e

Called as part of the npm lifecycle hooks after `npm e2e` is executed.  Makes sure the Chrome Webdriver is up-to-date.

### e2e

Runs any `Jasmine` tests (*.e2e.ts files) using `Protractor` based on the supplied configuration file.

### webpack:build (`npm run webpack:build`)

Uses Webpack to create a production version of the code into the `dist` folder.

### build (`npm run build`)

Uses `clean:build` to delete the `dist` build folder and then `webpack:build` to call Webpack to create a production version of the code back into the `dist` folder.

## Dependencies Explained

### Angular Features

**@angular/common** - The commonly needed services, pipes and directives provided by the Angular team.

**@angular/compiler** - Angular's Template Compiler. It understand templates and can convert them to code that makes the app run and render.

**@angular/core** - Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.

**@angular/platform-browser** - Everything DOM and browser related, especially the pieces that help render into DOM. This package also includes the bootstrapStatic method for bootstrapping applications for production builds that pre-compile templates offline.

**@angular/platform-browser-dynamic** - Providers and a bootstrap method for applications that compile templates on the client. don’t use offline compilation.

### Polyfills

**core-js** - monkey patches the global context (window) with essential features of ES2015 (ES6). Developers may substitute an alternative polyfill that provides the same core APIs. This dependency should go away once these APIs are implemented by all supported ever-green browsers.

**reflect-metadata** - a dependency shared between Angular and the TypeScript compiler. Developers should be able to update a TypeScript package without upgrading Angular, which is why this is a dependency of the application and not a dependency of Angular.

**rxjs** - a polyfill for the [Observables specification](https://github.com/zenparsing/es-observable) currently before the TC39 committee that determines standards for the JavaScript language. Developers should be able to pick a preferred version of rxjs (within a compatible version range) without waiting for Angular updates.

**zone.js** - a polyfill for the [Zone specification](https://gist.github.com/mhevery/63fdcdf7c65886051d55) currently before the TC39 committee that determines standards for the JavaScript language. Developers should be able to pick a preferred version of zone.js to use (within a compatible version range) without waiting for Angular updates.

### Development Dependencies

> TODO