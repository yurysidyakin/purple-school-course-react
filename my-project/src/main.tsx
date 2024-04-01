import axios from 'axios';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from './helpers/requireAuth';
import './index.css';
import { Layout } from './layouts/Menu/Layout';
import { Error } from './pages/Error/Error';
import { Favorites } from './pages/Favorites/Favorites';
import { Login } from './pages/Login/Login';
import { Movie } from './pages/Movie/Movie';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<RequireAuth>
						<Suspense fallback={<>Загрузка...</>}>
							<Menu />
						</Suspense>
					</RequireAuth>
				),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/movie/:id',
				element: (
					<RequireAuth>
						<Movie />
					</RequireAuth>
				),
				errorElement: <>Ошибка...</>,
				loader: async ({ params }) => {
					const { data } = await axios.get(
						`https://search.imdbot.workers.dev/?tt=${params.id}`
					);
					return data;
				},
			},
			{
				path: '/favorites',
				element: (
					<RequireAuth>
						<Favorites />
					</RequireAuth>
				),
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
