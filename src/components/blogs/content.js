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
      setNewBlog({ ...newBlog, content: transcript });
    };

    setRecognition(recognition);
  }, [newBlog]);

  const handleInputChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  const startMikeTyping = () => {
    if (recognition) {
      recognition.start();
      setNewBlog({ ...newBlog, mikeTyping: true });
    }
  };

  const stopMikeTyping = () => {
    if (recognition) {
      recognition.stop();
      setNewBlog({ ...newBlog, mikeTyping: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editBlog) {
      // Update an existing blog
      axios.put(`http://localhost:5000/api/blogs/${editBlog._id}`, newBlog)
        .then(response => {
          setBlogs(blogs.map(blog => (blog._id === response.data._id ? response.data : blog)));
          setEditBlog(null);
        })
        .catch(error => console.error(error));
    } else {
      // Create a new blog
      axios.post('http://localhost:5000/api/blogs', newBlog)
        .then(response => setBlogs([...blogs, response.data]))
        .catch(error => console.error(error));
    }
    // Clear the form
    setNewBlog({ title: '', content: '', mikeTyping: false });
    stopMikeTyping();
  };

  const handleEdit = (blog) => {
    setNewBlog({ title: blog.title, content: blog.content, mikeTyping: blog.mikeTyping });
    setEditBlog(blog);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => setBlogs(blogs.filter(blog => blog._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title:
            <input type="text" name="title" value={newBlog.title} onChange={handleInputChange} />
          </label>
          <br />
          <label>Content:
            <textarea name="content" value={newBlog.content} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            <input type="checkbox" name="mikeTyping" checked={newBlog.mikeTyping} onChange={handleInputChange} />
            Mike typing
          </label>
          <br />
          <button type="button" onClick={startMikeTyping}>Start Mike Typing</button>
          <button type="button" onClick={stopMikeTyping}>Stop Mike Typing</button>
          <br />
          <button type="submit">Submit</button>
        </form>

        <h2>Existing Blogs</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              <strong>{blog.title}</strong>: {blog.content}
              {blog.mikeTyping && <span> (Mike typing)</span>}
              <button onClick={() => handleEdit(blog)}>Edit</button>
              <button onClick={() => handleDelete(blog._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;
