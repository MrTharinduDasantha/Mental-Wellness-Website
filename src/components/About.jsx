import { useState } from "react"
import thumbnailImg from "../assets/video-thumbnail.webp"
import { FaPlay } from "react-icons/fa"
import { FaCircleArrowRight } from "react-icons/fa6"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }
  return (
    <div className="bg-[#f7f8fc] pb-16 pt-20" id="about">
      <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}  className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side */}
          <div className="md:w-1/2 w-full mb--8 md:mb-0">
            {
              !isVideoPlaying ? (
                <div className="relative">
                  <img src={thumbnailImg} className="w-full md:h-[446px] h-auto rounded-lg object-cover" alt="Thumbnail Image" />
                  <button onClick={handleVideoPlay} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer">
                    <FaPlay size={20} className="text-white" />
                  </button>
                </div>
              ) : (
                (null)
              )
            }
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-secondary font-bold mb-4 leading-snug capitalize">Individual Consult and Therapy</h2>
            <p className="text-lg mb-12 md:pr-8">Individual Consult and Therapy is a unique approach to mental health care that focuses on the individual's needs and concerns. We provide a safe and empathetic environment for you to talk with a therapist and receive personalized treatment that addresses your specific needs.</p>
            <button className="bg-primary text-white px-8 py-3.5 font-medium rounded-s-md hover:bg-primary/90">
              <a href="#contact" className="flex items-center gap-1">
                <span>Get Started</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>
        </div>

        {
          isVideoPlaying && (
            <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="relative w-full h-full flex items-center justify-center">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/YB-nFu50R1M?si=qFV3l5e6XWFyabP1" title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowfullscreen
                  className="rounded-lg"
                >
                </iframe>
                <button onClick={handleCloseVideo} className="absolute top-4 right-4 text-white text-4xl cursor-pointer">
                  &times;
                </button>
              </div>
            </motion.div>
          )
        }
      </motion.div>
    </div>
  )
}

export default About