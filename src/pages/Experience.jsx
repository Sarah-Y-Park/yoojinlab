import { motion } from 'framer-motion';

const timelineData = [
  { year: "2015", label: "Kyung Hee University BBA, BA" },
  { year: "2016", label: "Data Analyst at Andbeyond" },
  { year: "2018", label: "Data Analyst at Boozaapp" },
  { year: "2019", label: "Data Analyst at Samwoo" },
  { year: "2020", label: "Software Development @ SAIT" },
  { year: "2022", label: "Career Break for Childcare" },
  { year: "2024", label: "Employment Readiness Program" },
  { year: "2025", label: "Data Analyst Internship" },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left: Timeline */}
        <div className="relative w-full">
          <img
            src="/assets/wave.svg"
            alt="Experience Timeline"
            className="w-[80%] mx-auto"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  top: `${index * 11}rem`, // adjust spacing between items
                  left: index % 2 === 0 ? '0' : '60%',
                  textAlign: index % 2 === 0 ? 'left' : 'right',
                }}
              >
                <div className="text-pink-500 font-bold text-lg">{item.year}</div>
                <div className="text-gray-700 text-sm max-w-[180px]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Certificates */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center md:text-left">Certificates</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md border border-pink-100 hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img
                  src={`certs/Cert${index + 1}.png`}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
