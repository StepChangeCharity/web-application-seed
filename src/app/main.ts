// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { hotModuleReplacement } from './core/bootstrap/hmr';

function main() {
	return platformBrowserDynamic().bootstrapModule(AppModule);
}

if ((<any>module).hot) {
	hotModuleReplacement(main, module);
} else {
	document.addEventListener('DOMContentLoaded', () => main);
}