import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";
import Layout from "./Components/Layout";
import ContactUs from "./pages/ContactUs";
import AddGraduateForm from "./Components/AddGraduateForm";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates/:id" element={<Graduates />} />
        <Route path="/about/this/site" element={<About />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/register" element={<AddGraduateForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
