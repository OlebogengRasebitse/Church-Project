import React from 'react';

function Navbar() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav>
      <div className="logo">
        <span>My Website</span>
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button onClick={scrollToBottom}>Scroll to Bottom</button>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
