import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";
import Layout from "./Components/Layout";
import Contact from "./pages/Contact";
import AddGraduateForm from "./Components/AddGraduateForm";
import Login from "./pages/Login";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates/:id" element={<Graduates />} />
        <Route path="/about/this/site" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/register" element={<AddGraduateForm />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
