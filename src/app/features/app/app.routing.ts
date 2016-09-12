// Angular imports
import { Routes, RouterModule }	from '@angular/router';
// Application imports
import { HomeComponent, CounterComponent, ListComponent } from '../';

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
	},
	{
		path: 'list',
		component: ListComponent
	}
];

export const appRoutes = RouterModule.forRoot(routes, { useHash: true });
