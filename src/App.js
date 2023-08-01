import React from 'react';
import './App.css'; 

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Philip Rosen</h1>
          <p>Full-Stack Developer</p>
        </div>
      </header>
      
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I'm a self-motivated and detail-oriented individual with a passion for development. With a strong foundation in C#, PHP, and Java, I'm constantly seeking new challenges and opportunities to improve my skills and deliver high-quality work.</p>
        </section>
        
        <section id="work">
          <h2>My Work</h2>
          <div className="projects-container">
            <div className="project">
              <h3>Project One</h3>
              <p>Project Description</p>
                <img src="Images/sunset.jpeg" alt="Project One" />
              <a href="#">View Project</a>
            </div>
            <div className="project">
              <h3>Project Two</h3>
              <p>Project Description</p>
                <img src="Images/sunset.jpeg" alt="Project Two" />
              <a href="#">View Project</a>
            </div>
            <div className="project">
              <h3>Project Three</h3>
              <p>Project Description</p>
                <img src="Images/sunset.jpeg" alt="Project Three" />
              <a href="#">View Project</a>
            </div>
          </div>
        </section>
        
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send Message</button>
          </form>
        </section>
      </main>
      
      <footer>
        <p>&copy; Philip Rosen | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
