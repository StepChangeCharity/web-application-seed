// Angular imports
import { Routes, RouterModule }	from '@angular/router';
// Application imports
import { HomeComponent, CounterComponent } from '../';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'counter',
		component: CounterComponent
	}
];

export const appRoutes = RouterModule.forRoot(routes, { useHash: true });
