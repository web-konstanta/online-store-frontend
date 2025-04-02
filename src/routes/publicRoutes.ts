import Index from '../pages/Index';
import Product from '../pages/Product';
import { RouteType } from '../types';

export const publicRoutes: Array<RouteType> = [
	{ path: '/', component: Index, exact: true },
	{ path: '/product/:id', component: Product, exact: true }
];