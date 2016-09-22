function TakeScreenshot(): void {
	let hooks: cucumber.Hooks = this;

	hooks.After(function (scenario, callback) {
		// if (scenario.isFailed()) {
			browser.manage().window().setSize(1024, 2048).then(result =>
				browser.takeScreenshot().then(function (stream) {
					let decodedImage = new Buffer(stream, 'base64');
					scenario.attach(decodedImage, 'image/png', callback);
				}, function (err) {
					callback(err);
				}));
		// }
		// else {
		// 	callback();
		// }
	});
};

export = TakeScreenshot;