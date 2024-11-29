import React, { useState } from 'react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Blog Added Successfully!');
    setFormData({ blogName: '', description: '', authorName: '' });
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add a New Blog</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Blog Name:</label>
          <input
            type="text"
            name="blogName"
            value={formData.blogName}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="Enter the blog name"
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={textareaStyle}
            placeholder="Enter the blog description"
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="Enter the author's name"
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '30px auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
  fontFamily: 'Arial, sans-serif',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#555',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const textareaStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
  minHeight: '100px',
  resize: 'vertical',
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  textAlign: 'center',
};

export default BlogForm;
