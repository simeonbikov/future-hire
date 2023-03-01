import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";
import Layout from "./Components/Layout";
import ContactForm from "./pages/Form";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates/:id" element={<Graduates />} />
        <Route path="/about/this/site" element={<About />} />
        <Route path="/Contact-Us" element={<ContactForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
