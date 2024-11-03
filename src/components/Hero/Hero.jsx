import Navbar from "../Navbar"
import MainButton from "./MainButton";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";


const socialIcons = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://www.facebook.com",
  },
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com",
  },
  {
    id: 1,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com",
  },
]

const Hero = ({ heading, description, image1 }) => {

  const [sidebar, setSidebar] = useState(false)

  const onhandleSidebar =()=>{
    setSidebar(!sidebar)
  }

  return (
    <main className="container bg-primaryDark md:py-6 md:px-12 min-h-screen ">
      <section className="relative min-h-[90vh] bg-gradient-to-r from-primary to-secondary rounded-lg shadow-md">
        <div className="container">

          <Navbar
            logoT1={"Straw"}
            logoT2={"Berries"}
            sidebar ={sidebar}
            onhandleSidebar={onhandleSidebar}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[100%] place-items-center ">

            <div className="text-white space-y-4 p-4">
              <h1 className="text-5xl font-bold uppercase text-shadow">{heading}</h1>
              <p className="text-sm">{description}</p>
              <MainButton buttonText={"Shop Now"} />
            </div>

            <div>
              <div>
                <img className="w-[300px] img-shadow relative z-10 " src={image1} alt="" />
              </div>
            </div>

            <div className="md:hidden"></div>

          </div>


        </div>

        {
          sidebar && <div className="absolute top-0 right-0 w-[100px] bg-gradient-to-b from-primary to-primaryDark z-0 h-full ">
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <div className="w-[1px] bg-white h-[70px]"></div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              {
                socialIcons.map((item, index) => (
                  <div key={index}>
                    <a className="p-2 rounded-full border border-white inline-block text-white" href={item.url}>{item.icon}</a>
                  </div>
                ))
              }
            </div>
            <div className="w-[1px] bg-white h-[70px]"></div>
          </div>
        </div>
        }

        <h1 className="absolute bottom-0 w-full z-0 text-white text-[80px] text-center uppercase text-shadow font-bold sm:text-[120px] md:text-[150px]">barries</h1>
      </section>
    </main>
  )
}

export default Hero