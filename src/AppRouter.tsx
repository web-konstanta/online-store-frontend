import { publicRoutes } from './routes/publicRoutes';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map((route, key) =>
				<Route key={key} path={route.path} element={<route.component/>} />
			)}
		</Routes>
	);
};

export default AppRouter;