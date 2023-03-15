import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";
import Layout from "./Components/Layout";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AddGraduateForm from "./pages/AddGraduateForm";
import EditAddGraduateForm from "./pages/EditAddGraduateForm";

const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = () => {
			fetch("http://localhost:3100/api/login/success", {
				method: "GET",
				credentials: "include",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": true,
				},
			})
				.then((response) => {
					if (response.status === 200) {
						return response.json();
					}
					throw new Error("authentication has been failed!");
				})
				.then((resObject) => {
					setUser(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/graduates/:id" element={<Graduates />} />
				<Route path="/about/this/site" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/register" element={<AddGraduateForm />} />
				<Route
					path="/updateProfile/:id"
					element={user ? <EditAddGraduateForm /> : <Navigate to="/login" />}
				/>
				<Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
			</Routes>
		</Layout>
	);
};

export default App;
