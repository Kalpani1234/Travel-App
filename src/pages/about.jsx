import {Navbar} from "../components/navbar.jsx";
import {Footer} from "../components/footer.jsx";

export const About = () => {
  return (
      <div className="flex flex-col">
          <Navbar/>
          <div className="relative h-[35rem]">
              <img className="w-full h-full object-cover" src="/img3.jpg" alt=""/>
              <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-5xl font-bold text-white">
                      About us
                  </h1>
              </div>
          </div>
          <div className="container mx-auto max-w-7xl py-10 space-y-8">
              <div className="space-y-5">
                  <h1 className="text-3xl font-bold">Our History</h1>
                  <p className="text-lg text-justify">
                  Founded with a passion for showcasing the rich beauty and diverse culture of Sri Lanka, 
                  our journey began with a mission to introduce travelers to the hidden gems of Uva Province. 
                  From the lush tea plantations of Ella to the ancient temples in Badulla, 
                  we've dedicated ourselves to crafting authentic travel experiences that celebrate the heritage and natural wonders of this unique region. 
                  Over the years, we've grown to become a trusted travel platform, helping countless visitors connect with the soul of Sri Lanka.
                  Through years of learning and adapting, our team has built a network that captures the essence of Uva’s history and hospitality. 
                  We believe each traveler who visits Uva Province leaves with a deep appreciation for Sri Lanka’s timeless charm.
                  </p>
              </div>

              <div className="space-y-5">
                  <h1 className="text-3xl font-bold">Our Vision</h1>
                  <p className="text-lg text-justify">
                  Our vision is to be the leading gateway for travelers seeking to explore Sri Lanka’s vibrant landscapes, 
                  particularly the enchanting Uva Province.
                   We aim to inspire and guide adventurers from around the world, promoting sustainable tourism that preserves the region’s 
                   beauty while creating meaningful experiences. By shining a spotlight on Uva Province’s breathtaking scenery, 
                   cultural landmarks, and warm local hospitality, we envision a future where Sri Lanka stands as a premier global travel destination.
                   Our vision is rooted in the hope that more people will cherish the rare beauty of Uva Province. 
                   We look forward to seeing both locals and visitors embrace this region’s unique and untouched wonders.
                  </p>
              </div>

              <div className="space-y-5">
                  <h1 className="text-3xl font-bold">Our Mission</h1>
                  <p className="text-lg text-justify">
                  Our mission is to provide a seamless travel experience that immerses visitors in the authentic charm of Uva Province and beyond. 
                  We are committed to showcasing the best of Sri Lankan tourism through detailed itineraries, insider tips, and partnerships with local businesses. 
                  With a focus on responsible tourism, we strive to support local communities, preserve natural beauty, 
                  and make it easy for travelers to discover the hidden treasures of Uva—from cascading waterfalls and scenic hikes to historic temples and cultural festivals.
                  Our goal is to promote experiences that not only captivate but also respect the environment and local culture. By fostering understanding and appreciation, we hope every traveler finds joy and fulfillment in exploring Uva Province.


                  </p>
              </div>
          </div>
          <Footer/>
      </div>
  )
}