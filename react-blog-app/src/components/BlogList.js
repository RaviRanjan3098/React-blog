import React, { useContext } from 'react';
import Link from 'next/link';
import BlogContext from '../app/context/BlogContext'; 
const BlogList = () => {
  const { blogs } = useContext(BlogContext);

  if (!blogs) {
    return <div>Loading...</div>;
  } 
   
  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.description.substring(0, 100)}...</p>
          <Link href={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
