import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function ScrollHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed bottom-6 right-6 z-50 p-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
      aria-label="Back to Home"
    >
      <FaHome size={20} />
    </button>
  );
}

export default ScrollHomeButton;
