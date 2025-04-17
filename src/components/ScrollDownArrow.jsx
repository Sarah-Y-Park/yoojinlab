import { RiArrowDownDoubleLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

function ScrollDownArrow({ to = "about" }) {
  return (
    <div className="w-full flex justify-center mt-12 hidden md:block">
      <Link
        to={to}
        smooth={true}
        duration={800}
        offset={-60}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transform z-10 cursor-pointer text-2xl text-pink-500 animate-bounce"
      >
        <RiArrowDownDoubleLine className="text-7xl text-pink-200 hover:text-pink-300 transition" />
      </Link>
    </div>
  );
}

export default ScrollDownArrow;
