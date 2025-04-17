import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";
  const isBlogPage = location.pathname === "/blog";
  const isPostPage = location.pathname.startsWith("/post/");

  const shouldHideHeader = isResumePage || isBlogPage || isPostPage;

  return (
    <div className="scroll-smooth">
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<BlogPost />} />
      </Routes>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;