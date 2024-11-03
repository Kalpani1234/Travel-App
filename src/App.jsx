import './App.css'
import {Home} from "./pages/home.jsx";
import {Route, Routes} from "react-router-dom";
import {Contact} from "./pages/contact.jsx";
import {About} from "./pages/about.jsx";
import {Service} from "./pages/service.jsx";
import {Signup} from "./pages/signup.jsx";



function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/service"} element={<Service />} />
            <Route path={"/signin"} element={<Signup />} />

        </Routes>
    </>
  )
}

export default App