import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function Port() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <center>
    <div className={`Port ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>My Portfolio</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main>
      <section id={`about ${isDarkMode ? 'dark' : 'light'}`}>
  <h2>About Me</h2>
  <p>I'm a passionate and creative web developer with a strong foundation in front-end technologies. I love crafting beautiful and user-friendly websites and applications that leave a lasting impression.</p>
  <p>My journey into web development started when I discovered my passion for coding during college. Since then, I've dedicated myself to honing my skills and staying up-to-date with the latest trends and technologies in the industry.</p>
  <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor adventures.</p>
</section>

        <section id={`contact ${isDarkMode ? 'dark' : 'light'}`}>
  <h2>Contact Me</h2>
  <p>If you have any questions or would like to get in touch, feel free to reach out to me through any of the following methods:</p>
  <ul>
    <li>Email: example@email.com</li>
    <li>Phone: +1234567890</li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/yourname">Your LinkedIn Profile</a></li>
    <li>GitHub: <a href="https://github.com/yourusername">Your GitHub Profile</a></li>
  </ul>
</section>

        <section id={`skills ${isDarkMode ? 'dark' : 'light'}`}>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </section>
      </main>
    </div>
    </center>
  );
}

export default Port;