import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Face from "./pages/Face";
import Home from "./pages/Home";
import Register2 from "./pages/Register2";
import Body from "./pages/Body";
 import logo from './logo.svg';
 import register from "./pages/Register";
import './App.css';
import PvRoutes from "./PvRoutes";
import PageProducts from "./pages/PageProducts";


function App() {
  return (
    <div>
             
        <nav>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/face">Face</a>
          </li>
          <li>
            <a href="/body">Body</a>
          </li>
          <li>
            <a href="/PageProducts">Products</a>
          </li> 
          <li>
            <a href="/register2">Register</a>
          </li>
        </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element ={<PvRoutes/>}>
          <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="face" element={<Face />} />
          <Route path="body" element={<Body />} />
          <Route path="PageProducts" element={<PageProducts />} /> 
          <Route path="register2" element={<Register2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;