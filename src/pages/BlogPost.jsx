import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown';
import ScrollHomeButton from '../components/ScrollHomeButton';

const allPosts = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ attributes: {}, body: '' });

  useEffect(() => {
    const file = allPosts[`/src/posts/${slug}.md`];
    if (file) {
      const parsed = fm(file);
      setPost({ attributes: parsed.attributes, body: parsed.body });
    }
  }, [slug]);

  if (!post.body) return <div className="p-10">Loading...</div>;

  return (
    <section className="min-h-screen px-4 py-16"
    style={{
      backgroundColor: '#fdf2f8',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f496ed' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <div className="max-w-6xl mx-auto mb-8 px-4">
        <button
          onClick={() => navigate(-1)}
          className="text-pink-500 hover:text-pink-600 font-medium my-2 flex items-center gap-2"
        >
          <span className="text-lg">←</span> Back to List
        </button>

        <h1 className="text-3xl font-extrabold text-pink-600 my-10 text-left">
          Blog
        </h1>

        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-md">

            <h1 className="text-3xl font-bold text-pink-500 mb-8">
            {post.attributes.title}
            </h1>
            <p className="text-sm text-gray-500 mb-8 mr-10 text-right">{post.attributes.date}</p>
            <div className="prose prose-pink max-w-none">
            <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
         </div>
        </div>
      <ScrollHomeButton />
    </section>
  );
}

export default BlogPost;
