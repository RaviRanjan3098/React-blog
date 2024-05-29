import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      description,
      coverImage: coverImage ? URL.createObjectURL(coverImage) : null
    };

    if (editingIndex !== null) {
      const updatedBlogs = [...blogs];
      updatedBlogs[editingIndex] = newBlog;
      setBlogs(updatedBlogs);
      setEditingIndex(null);
    } else {
      setBlogs([newBlog, ...blogs]);
    }

    setTitle('');
    setDescription('');
    setCoverImage(null);
  };

  const handleEdit = (index) => {
    const blog = blogs[index];
    setTitle(blog.title);
    setDescription(blog.description);
    setCoverImage(null); // Reset cover image input as we can't directly set a file input
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-6">Submit a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Blog Description</label>
          <ReactQuill value={description} onChange={setDescription} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cover Image</label>
          <input
            type="file"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {editingIndex !== null ? 'Update Post' : 'Submit'}
        </button>
      </form>

      <h2 className="text-3xl font-bold mt-10 mb-6">Blog Posts</h2>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
            {blog.coverImage && (
              <img src={blog.coverImage} alt="Cover" className="w-full h-64 object-cover rounded-md" />
            )}
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: blog.description }} className="prose" />
            <div className="flex gap-4">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
