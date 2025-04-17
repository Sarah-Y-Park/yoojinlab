import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-pink-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <div className="px-6 py-10">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center font-semibold text-pink-500 hover:text-pink-600"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-center text-4xl font-extrabold text-pink-500">Resume</h1>
        <p className="mb-8 text-center text-gray-700">View my experience and qualifications</p>

        {/* Download Button */}
        <div className="mb-12 flex justify-center">
          <a
            href="assets/YoojinPark_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600"
          >
            <FaDownload /> Download PDF
          </a>
        </div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-lg bg-white p-6 text-gray-800 shadow-md"
        >
          {/* Summary */}
          <div>
            <h2 className="mb-2 text-xl font-bold text-pink-500">Summary</h2>
            <p>
              A results-driven data analyst with 4+ years of experience across finance, IT,
              construction, and higher education. Skilled in analyzing both quantitative and
              qualitative data to generate actionable insights through visualization. Strong in
              solving problems with a data-driven approach and clearly communicating findings to
              diverse stakeholders.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-2 text-xl font-bold text-pink-500">Skills</h2>
            <ul className="list-inside list-disc">
              <li>Data Analysis & Visualization: SQL, Power BI, Tableau, Power Query, Google Analytics</li>
              <li>ETL & Automation: Power Query, Report Automation, Workflow Optimization</li>
              <li>Tools: MS Office, Outlook, SharePoint, Canva, Qualtrics</li>
              <li>Programming: Java, JavaScript, HTML, CSS, Python, R</li>
              <li>Documentation, Training, Stakeholder Communication</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="mb-2 text-xl font-bold text-pink-500">Education</h2>
            <p>
              <strong>Software Development Diploma</strong>, SAIT, Calgary, AB – 2022
            </p>
            <p>
              <strong>Bachelor of Arts & BBA</strong>, Kyung Hee University, Korea – 2015
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="mb-2 text-xl font-bold text-pink-500">Experience</h2>
            <ul className="space-y-4">
              <li>
                <strong>Data Analyst Assistant</strong> – UCalgary Career Centre (Jan 2025 – Mar 2025)
                <ul className="ml-4 list-inside list-disc text-sm text-gray-600">
                  <li>Automated ETL pipelines for 15+ surveys/month</li>
                  <li>Built Power BI dashboards for 30+ stakeholders</li>
                  <li>Analyzed 8,000+ responses to improve program outcomes</li>
                </ul>
              </li>
              <li>
                <strong>Data Analyst</strong> – Samwoo A System (2019 – 2020)
                <ul className="ml-4 list-inside list-disc text-sm text-gray-600">
                  <li>Improved reporting with Power BI</li>
                  <li>Cut costs by 15% through data insights</li>
                </ul>
              </li>
              <li>
                <strong>Data Analyst</strong> – Boozaapp Company (2018 – 2019)
                <ul className="ml-4 list-inside list-disc text-sm text-gray-600">
                  <li>Built BI system for product & marketing decisions</li>
                  <li>Analyzed app usage & increased retention</li>
                </ul>
              </li>
              <li>
                <strong>Data Analyst</strong> – Andbeyond Capital (2016 – 2018)
                <ul className="ml-4 list-inside list-disc text-sm text-gray-600">
                  <li>Created investment dashboards & SQL databases</li>
                  <li>Automated reports, saving 90% of reporting time</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="mb-2 text-xl font-bold text-pink-500">Certifications</h2>
            <ul className="list-inside list-disc">
              <li>CFA Level 2 – 2019</li>
              <li>Google Data Analytics Certificate – 2024</li>
              <li>Career Service for Foreign Professionals – CIWA, 2025</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
