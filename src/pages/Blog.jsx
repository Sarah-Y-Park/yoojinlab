import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/getAllPosts'; 
import ScrollHomeButton from '../components/ScrollHomeButton';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    const loaded = getAllPosts();
    setPosts(loaded.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);
  

  const allTags = ['All', ...new Set(posts.flatMap((post) => post.tags))];
  const filteredPosts = selectedTag === 'All'
    ? posts
    : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <section className="min-h-screen px-4 py-16"
    style={{
      backgroundColor: '#fdf2f8',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <div className="max-w-6xl mx-auto mb-8 px-4">
        <button
          onClick={() => window.history.back()}
          className="text-pink-500 hover:text-pink-600 font-medium my-2 flex items-center gap-2"
        >
          <span className="text-lg">←</span> Back to Home
        </button>

        <h1 className="text-3xl font-extrabold text-pink-600 my-10 text-left">
          Blog
        </h1>
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-center mb-6 gap-2 flex-wrap">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  selectedTag === tag
                    ? 'bg-pink-500 text-white border-pink-500'
                    : 'bg-white text-pink-500 border-pink-300 hover:bg-pink-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col md:flex-row items-start md:items-stretch justify-between bg-white rounded-xl overflow-hidden shadow-md border"
              >
                <div className="flex-1 p-6">
                  <Link to={`/post/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:underline">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {post.summary || 'Content preview goes here...'}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 text-right">{post.date}</p>
                </div>


                <div className="md:w-48 h-40 flex items-center justify-center bg-pink-300 text-white text-sm font-bold">
                  image
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollHomeButton />
    </section>
  );
};

export default Blog;
