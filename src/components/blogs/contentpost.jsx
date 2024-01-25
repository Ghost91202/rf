import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', mikeTyping: false });
  const [editBlog, setEditBlog] = useState(null);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Fetch existing blogs from the server
    axios.get('http://localhost:5000/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));

    // Initialize SpeechRecognition
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setNewBlog(prevBlog => ({ ...prevBlog, content: transcript }));
    };

    setRecognition(recognition);
  }, []);

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setNewBlog(prevBlog => ({
      ...prevBlog,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleMikeTyping = () => {
    if (recognition) {
      if (!newBlog.mikeTyping) {
        recognition.start();
      } else {
        recognition.stop();
      }
      setNewBlog(prevBlog => ({ ...prevBlog, mikeTyping: !prevBlog.mikeTyping }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editBlog) {
        // Update an existing blog
        const response = await axios.put(`http://localhost:5000/api/blogs/${editBlog._id}`, newBlog);
        setBlogs(blogs => blogs.map(blog => (blog._id === response.data._id ? response.data : blog)));
        setEditBlog(null);
      } else {
        // Create a new blog
        const response = await axios.post('http://localhost:5000/api/blogs', newBlog);
        setBlogs(blogs => [...blogs, response.data]);
      }
    } catch (error) {
      console.error(error);
    }

    // Clear the form
    setNewBlog({ title: '', content: '', mikeTyping: false });
    if (newBlog.mikeTyping) {
      toggleMikeTyping(); // Stop Mike Typing if it's active
    }
  };

  const handleEdit = (blog) => {
    setNewBlog({ title: blog.title, content: blog.content, mikeTyping: blog.mikeTyping });
    setEditBlog(blog);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs => blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block mb-2 text-lg font-bold text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={newBlog.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />

          <label className="block mt-4 mb-2 text-lg font-bold text-gray-700">Content:</label>
          <textarea
            name="content"
            value={newBlog.content}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="mikeTyping"
                checked={newBlog.mikeTyping}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-lg font-bold text-gray-700">Mike typing</span>
            </label>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={toggleMikeTyping}
              className={`px-4 py-2 rounded ${
                newBlog.mikeTyping ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              } hover:bg-opacity-75 focus:outline-none`}
            >
              {newBlog.mikeTyping ? 'Stop Mike Typing' : 'Start Mike Typing'}
            </button>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>

        <h2 className="text-2xl font-bold mb-4">Existing Blogs</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog._id} className="mb-2">
              <strong className="text-lg font-semibold">{blog.title}</strong>: {blog.content}
              {blog.mikeTyping && <span className="text-sm text-red-500"> (Mike typing)</span>}
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;
