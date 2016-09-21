// Angular imports
import { enableProdMode }					from '@angular/core';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';

// Application Core imports
import { hotModuleReplacement }		from './core';

// Application imports
import { AppModule }							from './app.module';


if (process.env.NODE_ENV === 'production') {
	enableProdMode();
}

function main() {
	return platformBrowserDynamic().bootstrapModule(AppModule);
}

if ((<any>module).hot) {
	hotModuleReplacement(main, module);
} else {
	document.addEventListener('DOMContentLoaded', () => main() );
}