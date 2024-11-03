import './App.css'
import {Home} from "./pages/home.jsx";
import {Route, Routes} from "react-router-dom";
import {Contact} from "./pages/contact.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/contact"} element={<Contact />} />
        </Routes>
    </>
  )
}

export default App