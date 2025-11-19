<body>
  <div className="container">
    <h1>Hi, I'm Teresa jane sotto</h1>
      <h2>Student</h2>
    <p>Welcome to my portfolio. Choose what you’d like to explore:</p>

  
    <div className="btn-group">
      <button className="btn" onClick="showSection('about')">About Me</button>
      <button className="btn" onclick="showSection('projects')">Projects</button>
      <button className="btn" onclick="showSection('contact')">Get in Touch</button>
      <button className="btn" onclick="showSection('resume')">Download Resume</button>
    </div>

    <div id="about" className="section">
      <h2>About Me</h2>
      <p>Hi — I'm Teresa Jane Sotto. I build clean web experiences.</p>
<p>I'm an IT student with a passion for front-end development and hobbyist photography. I focus on creating accessible, responsive designs and enjoy turning creative ideas into fast, user-friendly web pages. In my free time, I explore visual storytelling through photography.</p>
     
      <button className="btn close-btn" onclick="closeSection('about')">Close</button>
    </div>

    <div id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <a> No Projects Yet</a>
      </ul>
      <button className="btn close-btn" onclick="closeSection('projects')">Close</button>
    </div>

    
<div id="contact" className="section">
  <h2>Get in Touch</h2>
  <p>📧 Email: <a href="mailto:sottoteresajane@gmail.com">teresajanesotto@gmail.com</a></p>
  <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/teresajanesotto-567261315/" target="_blank">linkedin.com/in/teresajanesotto</a></p>
  <p>💻 GitHub: <a href="https://github.com/teresajanesotto/teresajanesotto/">github.com/teresajanesotto</a></p>
  <button className="btn close-btn" onclick="closeSection('contact')">Close</button>
</div>

    <div id="resume" className="section">
      <h2>Download My Resume</h2>
      <a href="resume.pdf" className="download" download>⬇ Download Resume</a>
      <button className="btn close-btn" onclick="closeSection('resume')">Close</button>
    </div>
  </div>
</body>