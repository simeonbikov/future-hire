import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Hero from "../src/Components/Hero";

const App = () => {
  return (
    <Layout>
      <Hero
        title="Hire a Graduate"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/this/site" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
