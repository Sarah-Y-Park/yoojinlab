import { motion } from 'framer-motion';
import { FaDatabase, FaChartBar, FaTools, FaCode } from 'react-icons/fa';
import ScrollDownArrow from '../components/ScrollDownArrow';

function Skill() {
  const skillCategories = [
    {
      title: 'Data Analysis & Visualization',
      icon: <FaChartBar size={28} className="text-pink-500" />,
      skills: ['SQL', 'Power BI', 'Tableau', 'Power Query', 'Google Analytics', 'Data Cleaning', 'Data Transformation'],
    },
    {
      title: 'ETL & Process Automation',
      icon: <FaDatabase size={28} className="text-pink-500" />,
      skills: ['Python', 'Power Query', 'Report Automation', 'Workflow Optimization'],
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools size={28} className="text-pink-500" />,
      skills: ['MS Office', 'Outlook', 'SharePoint', 'Canva', 'Qualtrics'],
    },
    {
      title: 'Programming & Scripting',
      icon: <FaCode size={28} className="text-pink-500" />,
      skills: ['React', 'Java', 'JavaScript', 'HTML', 'CSS', 'Python', 'R'],
    },
  ];

  return (
    <section id="skills" className="relative mb-36 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-pink-500">Skills</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-pink-100 bg-white p-6 shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-3">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ScrollDownArrow to="portfolio" />
        </div>
      </div>
    </section>
  );
}

export default Skill;
