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
          <div className="container mx-auto py-10 space-y-8">
              <div className="space-y-5">
                  <h1 className="text-3xl font-bold">Our History</h1>
                  <p className="text-lg text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, animi atque autem
                      consequuntur corporis cumque, delectus doloremque doloribus ea eligendi enim eos eum excepturi
                      explicabo facere fugiat hic id illo impedit in incidunt iusto laborum magnam magni maxime minus
                      molestias natus necessitatibus nemo neque nihil nisi nobis non obcaecati odit officiis omnis optio
                      pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quia quidem quisquam quod
                      ratione recusandae rem repellendus repudiandae rerum saepe sapiente sequi similique sit soluta
                      sunt
                      suscipit tempora tenetur totam ullam unde ut vel veniam veritatis voluptate voluptates voluptatum.
                  </p>
              </div>

              <div className="space-y-5">
                  <h1 className="text-3xl font-bold">Our Mission</h1>
                  <p className="text-lg text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, animi atque autem
                      consequuntur corporis cumque, delectus doloremque doloribus ea eligendi enim eos eum excepturi
                      explicabo facere fugiat hic id illo impedit in incidunt iusto laborum magnam magni maxime minus
                      molestias natus necessitatibus nemo neque nihil nisi nobis non obcaecati odit officiis omnis optio
                      pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quia quidem quisquam quod
                      ratione recusandae rem repellendus repudiandae rerum saepe sapiente sequi similique sit soluta
                      sunt
                      suscipit tempora tenetur totam ullam unde ut vel veniam veritatis voluptate voluptates voluptatum.
                  </p>
              </div>

              <div className="space-y-5">
                  <h1 className="text-3xl font-bold">Our Vision</h1>
                  <p className="text-lg text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, animi atque autem
                      consequuntur corporis cumque, delectus doloremque doloribus ea eligendi enim eos eum excepturi
                      explicabo facere fugiat hic id illo impedit in incidunt iusto laborum magnam magni maxime minus
                      molestias natus necessitatibus nemo neque nihil nisi nobis non obcaecati odit officiis omnis optio
                      pariatur perferendis perspiciatis placeat praesentium quae quam quas qui quia quidem quisquam quod
                      ratione recusandae rem repellendus repudiandae rerum saepe sapiente sequi similique sit soluta
                      sunt
                      suscipit tempora tenetur totam ullam unde ut vel veniam veritatis voluptate voluptates voluptatum.
                  </p>
              </div>
          </div>
          <Footer/>
      </div>
  )
}