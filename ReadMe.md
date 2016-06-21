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

In general only four scripts will be called directly whilst developing; `install`, `start`, `test` and `e2e`.  These are explained in more detail in the "Scripts" section. 

In order to start developing for the first time you need to do the following from the command line in your application folder:

```bash
#Install the project dependencies via npm
npm install

# Start the development server
npm start
```

Once `start` has been called a development server is spun up which allows you to browse the application in its current state.  To do this visit http://localhost:8080 in your browser.

The development server is created from the `webpack-dev-server` package and creates the files to serve in memory based on the Webpack configuration that it is passed. For more information see the "Dependencies Explained" section. 

Your source files can be debugged through the browser in the normal way.  In the case of Chrome hit `F12` to launch the debugger, in the `Sources` tab expand the `webpack://` section and the the `.` folder.  Here you will find your source files to which breakpoints can be attached.

The development server will also refresh the content of your application whenever you make a change.
