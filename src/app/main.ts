import { enableProdMode }    from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import '../theme/styles.scss';

if (process.env.NODE_ENV === 'production') {
	enableProdMode();
}

bootstrap(AppComponent);
