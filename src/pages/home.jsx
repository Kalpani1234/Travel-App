import {Navbar} from "../components/navbar.jsx";
import {Footer} from "../components/footer.jsx";

export const Home = () => {
    return (
        <div className="flex flex-col bg-black">
            <Navbar/>
            <img className="w-full h-screen object-cover"
                 src="./img1.jpg"
                 alt=""/>
                 <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-5xl font-bold text-white">
                  Explore Beyond the Map
                  
                  </h1>
              </div>

              
            <Footer/>
        </div>
    )
}