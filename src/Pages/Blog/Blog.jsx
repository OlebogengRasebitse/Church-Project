import React from 'react';
import '../Blog/Blog.css'
import PriestImage from '../../images/Pastor.jpg';

const Blog = () => {
  return (
    <div className="blog-container">

      <div className="profile-container">
        <img
          src={PriestImage}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-article">
          <h4>About the Priest</h4>
          <p>
            Welcome to our blog! Our author, John Doe, is a dedicated member of our church community with a passion for sharing stories of faith, community, and inspiration. John has been writing for over a decade and brings a wealth of experience and a heartfelt perspective to every post. Stay tuned for uplifting articles, community highlights, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;