import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";
import Layout from "./Components/Layout";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AddGraduateForm from "./pages/AddGraduateForm";
import EditAddGraduateForm from "./pages/EditAddGraduateForm";
import Helmet from "react-helmet";
const App = () => {
  return (
		<Layout>
			 <Helmet>
                <meta charSet="utf-8" />
                <title>Future Hire</title>
                <link rel="canonical" href="https://cyf-future-hire.onrender.com/" />
				<meta name="description" content="Future Hire" />
            </Helmet>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/graduates/:id" element={<Graduates />} />
				<Route path="/about/this/site" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/register" element={<AddGraduateForm />} />
				<Route path="/updateProfile/:id" element={<EditAddGraduateForm />} />
        <Route path="/Login" element={<Login />} />
			</Routes>
		</Layout>
	);
};

export default App;
