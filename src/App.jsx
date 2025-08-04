import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home.jsx";
import Header from "./Components/Header.jsx";
import Register from "./page/Register/Register.jsx";
import Login from "./page/Login/Login.jsx";
import Dashboard from "./page/Dashboard/Dashboard.jsx";

function App() {
	return (
		<>
			<div className="w-full min-h-screen bg-gradient-to-bl from-fuchsia-300 to-pink-300 pb-10">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
