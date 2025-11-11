import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="blog-list">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 150)}...</p>
            <small>By {blog.author} — {new Date(blog.created_at).toLocaleDateString()}</small>
          </div>
        ))
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  );
};

export default BlogList;
