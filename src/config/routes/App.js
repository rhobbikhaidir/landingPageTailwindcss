import About from "pages/About";
import Apps from "pages/Apps";
import Doctor from "pages/Doctor";
import Home from "pages/Home";
import Testimonials from "pages/Testi";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/testimonial" element={<Testimonials />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
