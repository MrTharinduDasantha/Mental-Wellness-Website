import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const WorkingStep = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-img">
        <div className="absolute inset-0 bg-heroBg bg-opacity-75"></div>
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}  className="relative container mx-auto px-4 py-20">
            <div className="text-white text-center mb-20">
                <h2 className="text-4xl font-bold font-secondary mb-4">How It Works</h2>
                <p className="text-lg md:w-2/3 mx-auto">Actually we are not a mental health clinic, but we can help you to manage your mental health better. We provide you with a platform where you can talk to a professional psychologist or psychiatrist and get a better understanding of your mental health.</p>
            </div>

            <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
                <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">1</div>
                    <h3 className="text-lg font-medium mt-8">Fill out the Questionnaire</h3>
                    <p className="my-2">Answer a few questions about yourself and your current mental health condition. This will help us understand your needs better treatment options.</p>                    
                </div>
                <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">2</div>
                    <h3 className="text-lg font-medium mt-8">Get a Consultation</h3>
                    <p className="my-2">Our psychologist or psychiatrist will work with you to identify your current mental health condition and provide you with the best treatment options.</p>
                </div>
                <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">3</div>
                    <h3 className="text-lg font-medium mt-8">Manage Your Mental Health</h3>
                    <p className="my-2">We will help you to manage your mental health by providing you with tools and techniques to improve your mental health and reduce your stress levels.</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default WorkingStep