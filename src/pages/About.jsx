import ScrollDownArrow from '../components/ScrollDownArrow';

function About() {
  const expertiseData = [
    {
      icon: "/icons/analysis.gif",
      title: "Data Analysis",
      description:
        'I analyze diverse data sets to find patterns, spot outliers, and generate actionable insights. I enjoy asking the "why" behind the numbers and visualizing answers that make sense.',
    },
    {
      icon: "/icons/management.gif",
      title: "Workflow Automation",
      description:
        "I streamline repetitive tasks and reporting processes using tools like Excel, Power Query, SQL, and scripts. I love building systems that save time and reduce human error — so teams can focus on what really matters.",
    },
    {
      icon: "/icons/visualize.gif",
      title: "Data Visualization",
      description:
        "I create dashboards and reports that make data easier to understand and act on. From executive summaries to interactive charts, I aim to tell stories that are clear, focused, and actually helpful.",
    },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="mb-4 text-3xl font-extrabold text-pink-500">About</h2>
        <div className="mb-6 h-1 w-24 bg-pink-500" />

        {/* About Intro */}
        <p className="mb-16 max-full pb-10 text-sm font-semibold leading-relaxed text-gray-800 md:text-base">
          I am a data-driven problem solver who loves finding meaning in numbers. With 4+ years experience,
          I help make complex data easier to understand and use. I’ve worked across industries, from finance
          to higher education, building dashboards, streamlining reporting, and uncovering patterns that actually matter.
          I’m curious, detail-oriented, and always thinking about how data can tell a better story.
          Right now, I’m looking for a role where I can build useful tools, solve real problems, and grow through meaningful work.
        </p>

        {/* Expertise */}
        <h3 className="mb-12 text-center text-2xl font-bold text-pink-500">My Expertise</h3>
        <div className="mb-16 grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {expertiseData.map((item, index) => (
            <div key={index} className="flex flex-col items-center rounded-xl p-5 shadow-md">
              <img
                src={item.icon}
                alt={item.title}
                className="mb-4 h-24 w-24 object-contain"
              />
              <p className="font-semibold">{item.title}</p>
              <p className="max-w-xs text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-8 flex justify-center">
          <ScrollDownArrow to="skills" />
        </div>
      </div>
    </section>
  );
}

export default About;
