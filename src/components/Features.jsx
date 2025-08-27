import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Users, Target } from "lucide-react";

const WavyLine = () => {
  return (
    <div className="w-full">
      <svg
        className="w-full h-12"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1))",
        }}
      >
        <path
          d="M0,24 Q36,36 72,24 Q108,12 144,24 Q180,36 216,24 Q252,12 288,24 Q324,36 360,24 Q396,12 432,24 Q468,36 504,24 Q540,12 576,24 Q612,36 648,24 Q684,12 720,24 Q756,36 792,24 Q828,12 864,24 Q900,36 936,24 Q972,12 1008,24 Q1044,36 1080,24 Q1116,12 1152,24 Q1188,36 1224,24 Q1260,12 1296,24 Q1332,36 1368,24 Q1404,12 1440,24 V0 H0 Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />,
      title: "Industry-oriented curriculum",
      description:
        "An updated curriculum engineered to teach you only what the industry demands.",
    },
    {
      icon: <Brain className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />,
      title: "AI-driven learning products",
      description:
        "AI-based IDE with real-time support and help. AI-based mock interviews, evaluation systems.",
    },
    {
      icon: <Users className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />,
      title: "Experienced Instructors",
      description:
        "Courses taught only by people who have already cracked 1000+ tech professionals to guide you.",
    },
    {
      icon: <Target className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />,
      title: "1000+ mock interviews",
      description:
        "Practice your skills with unlimited number of mock interviews you can schedule yourself.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Section content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
            WHY NEWTON SCHOOL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            Industry-tailored learning
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* White cards */}
              <Card className="h-full bg-white hover:shadow-lg transition-shadow rounded-2xl">
                <CardContent className="p-5 md:p-6 space-y-4">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-700 mb-5 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Get started on your journey towards unlocking hundreds of job
            opportunities with Newton School
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-lg">
            Register now →
          </Button>
        </motion.div>
      </div>

      {/* Bottom wavy background */}
      <div className="absolute bottom-0 left-0 w-screen">
        <WavyLine />
      </div>
    </section>
  );
};

export default Features;
