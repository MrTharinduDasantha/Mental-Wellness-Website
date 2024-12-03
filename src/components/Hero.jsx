import heroBg from "../assets/hero.webp"
import { FaCircleArrowRight } from "react-icons/fa6"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const Hero = () => {
  return (
    <section className="bg-heroBg text-white flex items-center pt-28 md:h-screen" id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* Left Side */}
        <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="md:w-1/2"> 
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">Start Your Journey to Mental Wellness</h1>
          <p className="text-lg mb-12 md:pr-8">Discover the secrets of mental wellness and start living a better life. We provide you with a platform to connect with other like-minded individuals and share your experiences. Join us and start living a better life.</p>
          <button className="bg-primary text-white px-8 py-3.5 font-medium rounded-s-md hover:bg-primary/90">
            <a href="#contact" className="flex items-center gap-1">
              <span>Get Started</span>
              <FaCircleArrowRight />
            </a>
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="md:w-1/2 h-full">
          <img src={heroBg} className="w-full object-cover" alt="Hero Image" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero