import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ScrollDownArrow from '../components/ScrollDownArrow';

function Main() {
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const textLines = [
    'Data Analyst.',
    'Problem Solver.',
    'Process Optimizer.',
    'Insight Storyteller.',
  ];

  useEffect(() => {
    if (lineIndex < textLines.length) {
      const line = textLines[lineIndex];

      if (charIndex < line.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + line.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + (lineIndex < textLines.length - 1 ? '\n' : ''));
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [charIndex, lineIndex]);

  return (
    <>
      <section
        id="main"
        className="relative flex min-h-screen w-full items-center justify-center bg-pink-50 px-6 text-sm sm:text-base"
        style={{
          backgroundColor: '#fdf2f8',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="flex w-full max-w-7xl flex-col items-center gap-20 md:flex-row-reverse">
          {/* Profile Section */}
          <div className="relative hidden h-[440px] w-[480px] md:block">
            <div className="absolute bottom-0 h-[240px] w-full rounded-[160px] bg-pink-300" />
            <img
              src="assets/Profile.png"
              alt="Sarah"
              className="absolute bottom-0 left-1/2 w-[480px] -translate-x-1/2 translate-y-[-3px] rounded-3xl object-cover"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full text-left text-gray-900 md:max-w-xl"
          >
            <h1 className="mb-6 text-3xl font-extrabold leading-snug text-pink-500 sm:text-5xl md:text-6xl">
              Hi there!<br />
              I am Yoojin.
            </h1>
            <pre
              className="mb-20 min-h-[160px] w-full whitespace-pre-wrap text-lg font-extrabold leading-tight sm:text-2xl md:text-4xl"
              style={{ lineHeight: '1.2', height: '160px' }}
            >
              {currentText}
              {!isTypingComplete && (
                <span className="ml-2 inline-block h-10 w-[10px] animate-pulse bg-gray-300 align-middle" />
              )}
            </pre>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <RouterLink
                to="/resume"
                className="rounded-full border-2 border-pink-500 px-4 py-1.5 text-sm font-bold text-pink-600 transition hover:bg-pink-500 hover:text-white sm:px-6 sm:py-2 sm:text-base"
              >
                Resume
              </RouterLink>
              <ScrollLink
                to="contact"
                smooth
                duration={800}
                offset={-60}
                className="cursor-pointer rounded-full border-2 border-pink-500 px-4 py-1.5 text-sm font-bold text-pink-600 transition hover:bg-pink-500 hover:text-white sm:px-6 sm:py-2 sm:text-base"
              >
                Contact
              </ScrollLink>
            </div>
          </motion.div>
        </div>

        {/* SVG Curve */}
        <div className="absolute bottom-0 left-0 z-[1] w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-[80px] w-full"
          >
            <path
              d="M0,60 C150,140 350,-40 500,60 L500,150 L0,150 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      <ScrollDownArrow to="about" />
    </>
  );
}

export default Main;
