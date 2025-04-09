import { RouteObject } from 'react-router-dom';
import Index from '../pages/Index';
import Product from '../pages/Product';

export const publicRoutes: RouteObject[] = [
	{
		index: true,
		Component: Index
	},
	{
		path: '/product/:id',
		Component: Product
	}
];