import Index from '../pages/Index';
import { RouteType } from '../types';

export const publicRoutes: Array<RouteType> = [
	{ path: '/', component: Index, exact: true }
];