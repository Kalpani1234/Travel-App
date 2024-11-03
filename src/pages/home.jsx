import {Navbar} from "../components/navbar.jsx";
import {Footer} from "../components/footer.jsx";

export const Home = () => {
    return (
        <div className="flex flex-col bg-black">
            <Navbar/>
            <img className="w-full h-screen object-cover"
                 src="./img1.jpg"
                 alt=""/>
            <Footer/>
        </div>
    )
}