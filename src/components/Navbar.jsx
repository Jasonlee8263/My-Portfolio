import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { useState } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
  const [active, setactive] = useState("")
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
        to="/"
        className="flex items-center gap-2"
        onClick={()=>{
          setactive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className="w-24 h-24 object-contain"/>
        </Link>
      </div>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => (
          <li
          key={link.id}
          className={`${active === link.title ? "text-white" : "text-gray-400"} mx-2 `}
          onClick={()=>{
            setactive(link.title)
          }}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar