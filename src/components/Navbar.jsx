import { GiHamburgerMenu } from "react-icons/gi"

const NavLinks = [
  {
    id: 1,
    link: "#",
    title: "Home"
  },
  {
    id: 2,
    link: "#",
    title: "Where to find"
  },
  {
    id: 3,
    link: "#",
    title: "Contact"
  },
]
const Navbar = ({ logoT1, logoT2 , onhandleSidebar}) => {
  return (
    <div className="text-white relative z-10">
      <nav className=" py-4 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold uppercase">{logoT1}<span className="font-normal">{logoT2}</span></h1>
          </div>
          <div>
            <ul className="hidden sm:flex gap-14 text-xl ">
              {
                NavLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div>
          <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={onhandleSidebar}/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar