import { Navbar } from "../components/navbar.jsx";
import { Footer } from "../components/footer.jsx";

export const Home = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <img className="w-full h-screen object-cover"
                src="./img1.jpg"
                alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">
                    Explore Beyond the Map

                </h1>
            </div>

            <section class="py-24 ">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Recent Trips</h2>
                    <div class="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img6.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                               
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Little adam's peak </h4>
                                <p class="text-gray-500 leading-6 mb-10">"Little Adam's Peak offers fantastic breathtaking views and a gentle hike, perfect for capturing the natural beauty of Sri Lanka's lush landscapes."</p>
                                
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img7.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                              
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Nine Arches Bridge</h4>
                                <p class="text-gray-500 leading-6 mb-10">The Nine Arches Bridge is an architectural marvel set amidst lush greenery, providing a picturesque backdrop for stunning photographs and memorable walks.</p>
                                
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img8.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                               
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Dunhinda Falls</h4>
                                <p class="text-gray-500 leading-6 mb-10">Dunhinda Falls captivates with its majestic cascade, surrounded by dense forests, making it a tranquil oasis for nature lovers and adventure seekers alike.</p>
                              
                            </div>
                        </div>
                       
                    </div>

                    <div class="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 pt-8">
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img9.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                               
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Ella Swing</h4>
                                <p class="text-gray-500 leading-6 mb-10">The Ella Swing offers an exhilarating experience high above the stunning hills, providing breathtaking views and the perfect backdrop for unforgettable photos.</p>
                                
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img10.png" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                             
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Kubalwela Mahamewna Asapuwa</h4>
                                <p class="text-gray-500 leading-6 mb-10">Kubalwela Mahamewna Asapuwa is a serene sanctuary that blends spirituality and nature, inviting visitors to experience its tranquil environment and inspiring architecture.</p>
                               
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img11.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                             
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Flying Ravana</h4>
                                <p class="text-gray-500 leading-6 mb-10">Flying Ravana is an exhilarating experience that combines adrenaline and stunning views, allowing adventurers through the air while taking in the breathtaking landscapes.</p>
                                
                            </div>
                        </div>
                      
                    </div>

                    <div class="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 pt-8">
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img12.JPG" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                              
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Bomburu Ella</h4>
                                <p class="text-gray-500 leading-6 mb-10">Bomburu Ella is a hidden gem featuring cascading waterfalls surrounded by lush greenery, making it a perfect spot for nature lovers seeking tranquility.</p>
                                
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img13.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                               
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Buduruwagala Temple</h4>
                                <p class="text-gray-500 leading-6 mb-10">Buduruwagala Temple is a remarkable archaeological site known for its impressive rock carvings and ancient statues, set against a backdrop of stunning natural beauty.</p>
                               
                            </div>
                        </div>
                        <div class="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                            <div class="flex items-center">
                                <img src="/img14.jpg" alt="blogs tailwind section" class="rounded-t-2xl w-full object-cover" />
                            </div>
                            <div class="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                               
                                <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">Ravana Pool Club</h4>
                                <p class="text-gray-500 leading-6 mb-10">Ravana Pool Club is a vibrant destination offering relaxation and leisure amidst lush surroundings, complete with refreshing pools and a lively atmosphere.</p>
                                
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}