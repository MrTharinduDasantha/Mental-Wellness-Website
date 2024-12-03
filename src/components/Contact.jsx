import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { FaGlobe, FaUserDoctor } from "react-icons/fa6"
import { TbClock24 } from "react-icons/tb"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [message, setMessage] = useState("")
    const [showModel, setShowModel] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !phone || !country || !message) {
            toast.error("Please fill all the fields", { position: "bottom-left" })
            return
        }
        setShowModel(true)
    }

    const closeModel = () => {
        setShowModel(false)
        setName("")
        setEmail("")
        setPhone("")
        setCountry("")
        setMessage("")
    }
  return (
    <div className="bg-heroBg flex items-center justify-center py-28 px-8" id="contact">
        <div className="container mx-auto">
            <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
                {/* Left Side */}
                <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}  className="space-y-8">
                    <h2 className="text-4xl font-bold font-secondary text-white">Make an Appointment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                <TbClock24 className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium">24 Hours Service</h3>
                                <p>We are available 24/7 to assist you with any questions or concerns.</p>
                            </div>            
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                <FaUserDoctor className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium">Expert Doctors</h3>
                                <p>Our doctors are highly experienced and have vast experience in treating mental health issues.</p>
                            </div>            
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                <FaPhoneAlt className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium">High Quality Care</h3>
                                <p>We provide high-quality care to ensure that you receive the best treatment possible.</p>
                            </div>            
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                <FaGlobe className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium">Trusted Clinic</h3>
                                <p>We are a trusted clinic that provides high-quality care to our patients.</p>
                            </div>            
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="space-y-8 p-8 bg-white shadow-xl rounded-md">
                    <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex sm:flex-row flex-col gap-4">
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" value={name} />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" value={email} />
                        </div>
                        <div className="flex sm:flex-row flex-col gap-4">
                            <input onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Contact Number" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" value={phone} />
                            <input onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" value={country} />
                        </div>
                        <textarea rows="5" onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full p-4 rounded-md focus:outline-none resize-none focus:ring-2 focus:ring-primary shadow" value={message}></textarea>
                        <button placeholder="Message" className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80 ">Send Message</button>
                    </form>
                </motion.div>
            </div>
        </div>
        {
            showModel && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
                    <div className="bg-white p-8 rounded-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Thank you for contacting us!</h2>
                        <p>{name} we will get back to you as soon as possible.</p>
                        <button onClick={closeModel} className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80">Close</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Contact