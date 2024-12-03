import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    const handleScroll = () => {
        const sections = ["home", "services", "about", "pricing", "testimonials"]
        const scrollPositon = window.scrollY + 100

        sections.forEach(section => {
            const element = document.getElementById(section)
            if (element) {
                const offsetTop = element.offsetTop
                const height = element.offsetHeight
                if (scrollPositon >= offsetTop && scrollPositon < offsetTop + height) {
                    setActiveSection(section)
                }
            }
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            })
        }
    }

    const navLinks = (
        <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
            <li>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo("home");}} href="#home" className={`text-white ${activeSection === "home" ? "active" : ""}`}>Home</motion.a>
            </li>
            <li>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo("services");}} href="#services" className={`text-white ${activeSection === "services" ? "active" : ""}`}>Services</motion.a>
            </li>
            <li>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo("about");}} href="#about" className={`text-white ${activeSection === "about" ? "active" : ""}`}>About Us</motion.a>
            </li>
            <li>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo("pricing");}} href="#pricing" className={`text-white ${activeSection === "pricing" ? "active" : ""}`}>Pricing</motion.a>
            </li>
            <li>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo("testimonials");}} href="#testimonials" className={`text-white ${activeSection === "testimonials" ? "active" : ""}`}>Testimonials</motion.a>
            </li>
        </ul>
    )
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
        <div className="container flex justify-between items-center mx-auto h-full">
            {/* Logo */}
            <div>
                <a href="/">
                    <img src="/logo.svg" alt="Logo" />
                </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex flex-grow justify-center">
                <nav>
                    {navLinks}
                </nav>
            </div>
            
            {/* Button */}
            <div className="hidden md:block">
                <a onClick={(e) => {e.preventDefault(); handleScrollTo("contact");}} href="#contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">Contact Us</a>
            </div>

            {/* Mobile Navigation */}
            <div className="block md:hidden">
                <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                    <HiOutlineMenuAlt3 className="size-6" />
                </button>
            </div>
        </div>

        {/* Mobile Navigation Links */}
        {
            isOpen && (
                <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
                    <ul className="flew flex-col p-4 space-y-3">
                        {navLinks.props.children}
                        <li className="py-2">
                            <a onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo("contact");}} href="#contact" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            )
        }
    </header>
  )
}

export default Navbar