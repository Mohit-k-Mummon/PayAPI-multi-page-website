import React from 'react';
import './App.css';

// Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/pricing', element: <PricingPage /> },
			{ path: '/about', element: <AboutPage /> },
			{ path: '/contact', element: <ContactPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
