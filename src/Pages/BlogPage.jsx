import React, { useEffect, useState } from "react";
import "../styles/BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Backend se data fetch karna
    fetch("http://localhost:5000/api/blogs") // 🔗 tumhara Node.js + MySQL API endpoint
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <h1 className="blog-title">Latest Blog Posts</h1>

      {loading ? (
        <p className="loading-text">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="no-data">No blog posts found.</p>
      ) : (
        <div className="blog-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <p>{blog.content?.slice(0, 150)}...</p>
                <small>
                  By {blog.author} —{" "}
                  {new Date(blog.created_at).toLocaleDateString()}
                </small>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
