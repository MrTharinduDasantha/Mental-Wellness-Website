import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import footerLogo from "../assets/footer-logo.svg"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const Footer = () => {
  return (
    <div className="py-12 bg-gray-100 px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="space-y-6 mr-14">
                <div className="flex items-center space-x-2">
                    <img src={footerLogo} alt="Footer Logo" className="w-32 h-auto" />
                </div>
                <p className="text-para">Mental Wellness is a platform that provides a safe space for people to talk about their mental health issues and seek help from a professional mental health professional.</p>
                <div className="flex space-x-4">
                    <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                        <FaTwitter className="text-xl" />
                    </a>
                    <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                        <FaInstagram className="text-xl" />
                    </a>
                    <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
                        <FaLinkedinIn className="text-xl" />
                    </a>
                </div>
            </motion.div>

            <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}  className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#home" className="hover:underline text-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline text-gray-700">About Us</a>
                    </li>
                    <li>
                        <a href="#services" className="hover:underline text-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline text-gray-700">Contact Us</a>
                    </li>
                </ul>
            </motion.div>

            <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}  className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                    <li>
                        <a href="#" className="hover:underline text-gray-700">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline text-gray-700">Terms of Services</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline text-gray-700">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline text-gray-700">Support Center</a>
                    </li>
                </ul>
            </motion.div>

            <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-3">
                    <li href="#home" className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" />
                        <p>123 Main St, Kadawatha, Sri Lanka</p>
                    </li>
                    <li href="#home" className="flex items-center gap-2">
                        <FaPhoneAlt className="text-primary" />
                        <p>+94 77 123 4567</p>
                    </li>
                    <li href="#home" className="flex items-center gap-2">
                        <FaEnvelope className="text-primary" />
                        <p>info@mentalwellness.com</p>
                    </li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Footer