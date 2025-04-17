import { useState } from 'react';

const tabs = ["All", "BI", "Systems", "Quant"];

const projects = [
  { id: 1, category: "Systems", title: "Coming soon!", bg: "bg-pink-400" },
  { id: 2, category: "BI", title: "Coming soon!", bg: "bg-pink-300" },
  { id: 3, category: "Quant", title: "Coming soon!", bg: "bg-pink-200" },
  { id: 4, category: "Quant", title: "Coming soon!", bg: "bg-pink-100" },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="relative min-h-screen py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-pink-500">Portfolio</h2>
        <div className="mb-6 h-1 w-24 bg-pink-500 mx-auto" />

        {/* Tab Filter */}
        <div className="mb-8 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-4 py-2 transition ${
                activeTab === tab
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative h-48 overflow-hidden rounded-xl shadow ${project.bg}`}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Background */}
      <div
        className="absolute bottom-0 left-0 z-[1] w-full overflow-hidden leading-[0]"
        style={{
          backgroundColor: '#fdf2f8',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="h-[80px] w-full rotate-180"
        >
          <path
            d="M0,60 C150,140 350,-40 500,60 L500,150 L0,150 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
}

export default Portfolio;
