import React from 'react';
import './App.css';
import Navbar from './components/NavbarMinimal';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from "./pages/home"
import Journey from "./pages/journey"
import Profile from "./pages/profile"
import Services from "./pages/services"

function App() {
	return (
		<Router>
			<NavbarMinimal />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/journey' element={<Journey />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/services' element={<Services />} />
			</Routes>
		</Router>
	);
}

export default App;
