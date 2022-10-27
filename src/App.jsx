import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Detalice from './pages/Detalice.jsx'
import ErrorPage from './pages/error-page.jsx'


function App() {

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'detalice/:detalice',
		element: <Detalice />,
	
	},
])


	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
