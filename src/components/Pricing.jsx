import { motion } from "framer-motion"
import { fadeIn } from "../utils/animations"

const Pricing = () => {
  const packagePlans = [
    {
      name: "Basic",
      price: "$99",
      description: "Ideal for individuals and small businesses looking to get started with mental wellness.",
      features: [
        "10 sessions per month",
        "100 minutes of coaching",
        "1 on-site session",
        "Priority support"
      ]
    },
    {
      name: "Pro",
      price: "$199",
      description: "Ideal for individuals and small businesses looking to grow their presence online.",
      features: [
        "20 sessions per month",
        "200 minutes of coaching",
        "2 on-site sessions",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "Ideal for larger businesses and brands looking to scale their mental wellness.",
      features: [
        "30 sessions per month",
        "300 minutes of coaching",
        "3 on-site sessions",
        "Customized coaching plan"
      ]
    }
  ]

  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact")
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      })
    }
  }
  return (
    <div className="bg-[#f7f8fc] pt-32" id="pricing">
      <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-secondary font-bold mb-3">Perfect for Small & Large Brands</h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">We offer affordable pricing plans for small businesses and brands looking to grow their presence online. Our pricing plans are designed to meet the needs of small businesses and brands, while still providing a high level of service and support.</p>
        </div>

        {/* Pricing Plans */}
        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8">
          {
            packagePlans.map((packagePlan, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex-1 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{packagePlan.name}</h3>
                <hr className="w-24 border text-primary border-primary" />
                <p className="text-2xl font-bold my-4">{packagePlan.price} <span className="font-normal">/ month</span></p>
                <p className="text-lg mb-4">{packagePlan.description}</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {
                    packagePlan.features.map((feature, index) => (
                      <li key={index} className="text-lg">{feature}</li>
                    ))
                  }
                </ul>
                <button
                  onClick={handleScrollToContact} 
                  className="bg-primary text-white py-3 px-6 rounded"
                >
                  Get Started
                </button>
              </div>
            ))
          }
        </div>
      </motion.div>
    </div>
  )
}

export default Pricing