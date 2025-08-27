import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const logosRow1 = [
  { src: "/logos/phonepe.jpg", alt: "PhonePe" },
  { src: "/logos/zomato.png", alt: "Zomato" },
  { src: "/logos/Coinbase.png", alt: "Coinbase" },
  { src: "/logos/Paytm-Logo.webp", alt: "Paytm" },
  { src: "/logos/Uber.jpg", alt: "Uber" },
  { src: "/logos/salesforce.jpg", alt: "Salesforce" },
  { src: "/logos/amazon.png", alt: "Amazon" },
  { src: "/logos/meta.png", alt: "Meta" },
  { src: "/logos/google.jpg", alt: "Google" },
  { src: "/logos/microsoft.png", alt: "Microsoft" },
];

const logosRow2 = [
  { src: "/logos/cisco.png", alt: "Cisco" },
  { src: "/logos/stripe.png", alt: "Stripe" },
  { src: "/logos/netflix.webp", alt: "Netflix" },
  { src: "/logos/flipkart.png", alt: "Flipkart" },
  { src: "/logos/Razorpay-Logo.jpg", alt: "Razorpay" },
  { src: "/logos/visa.png", alt: "Visa" },
  { src: "/logos/atlassian.webp", alt: "Atlassian" },
  { src: "/logos/paypal-logo.webp", alt: "PayPal" },
  { src: "/logos/Cred.jpg", alt: "CRED" },
];

// Reusable marquee row
const MarqueeRow = ({ logos, direction = "left", speed = 25 }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex space-x-8 sm:space-x-12 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {/* Duplicate logos 2 times for seamless effect */}
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-8 sm:h-10 md:h-12 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

const Companies = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10">
          Get offers from{" "}
          <span className="text-blue-600">800+ top companies</span>
        </h2>

        {/* Logos Infinite Rows */}
        <div className="space-y-6 sm:space-y-8">
          {/* Row 1 - Left */}
          <MarqueeRow logos={logosRow1} direction="left" speed={30} />

          {/* Row 2 - Right */}
          <MarqueeRow logos={logosRow2} direction="right" speed={35} />
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 text-base sm:text-lg rounded-xl shadow-md">
            See Placement Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Companies;
