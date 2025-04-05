import Layout from "@src/components/Layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [...publicRoutes]
	}
])