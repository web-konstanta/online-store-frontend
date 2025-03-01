import Main from '../pages/Main';
import { RouteType } from '../types';

export const publicRoutes: Array<RouteType> = [
	{ path: '/', component: Main, exact: true }
];