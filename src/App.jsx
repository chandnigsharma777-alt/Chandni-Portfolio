
import { useEffect } from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

// PROJECT DETAILS
const projects = [
  {
    number: "01",
    name: "Smart Expense Tracker",
    type: "MERN STACK",
    description: "Manage income, expenses and track your balance.",
    tags: ["React", "Node.js", "MongoDB"],
    github:
      "https://github.com/chandnigsharma777-alt/Smart-Expense-Tracker",
    image: "",
  },
  {
    number: "02",
    name: "Destiny Travels",
    type: "WEB DEVELOPMENT",
    description:
      "Explore travel destinations and manage destination information.",
    tags: ["React", "Express", "MongoDB"],
    github: "",
    image: "/images/travel-journal.png",
  },
  {
    number: "03",
    name: "CineBook",
    type: "WEB APPLICATION",
    description:
      "Movie library API with pagination and movie information.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "",
    image: "/images/cinebook.png",
  },
];

// MY SKILLS
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Networking",
  "Cybersecurity",
];

function App() {
  // SPOTLIGHT AND SCROLL ANIMATIONS
  useEffect(() => {
    const moveSpotlight = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", moveSpotlight);

    const elements = document.querySelectorAll(
      ".section-heading, .about-grid, .skills-layout, .project-card, .education-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("mousemove", moveSpotlight);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          CHANDNI<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">
            Let's Talk ↗
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero section" id="home">

        <div className="hero-content">

          <span className="availability">
            <span className="green-dot"></span>
            OPEN TO OPPORTUNITIES
          </span>

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Chandni
            <span>G Sharma.</span>
          </h1>

          <h2>
            Cybersecurity Enthusiast
            <br />
            & Full Stack Developer.
          </h2>

          <p className="hero-description">
            I love building creative digital experiences,
            exploring technology and learning how to make
            the digital world more secure.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-bottom">
            <span>BASED IN INDIA</span>
            <span>CREATIVE · CURIOUS · DETERMINED</span>
          </div>

        </div>

        {/* 3D DEVELOPER WORKSPACE */}
        <div className="visual-area">

          <div className="hero-orbit"></div>
          <div className="hero-orbit orbit-small"></div>

          <div className="security-shield">♢</div>

          <div className="tech-float react-float">
            ⚛ React
          </div>

          <div className="tech-float node-float">
            ⬡ Node.js
          </div>

          <div className="tech-float mongo-float">
            ◈ MongoDB
          </div>

          <div className="workspace">

            <div className="workspace-screen">

              <div className="screen-header">
                <span></span>
                <span></span>
                <span></span>
                <small>chandni.dev</small>
              </div>

              <div className="screen-code">
                <p><b>const</b> future = {"{"}</p>
                <p>&nbsp; creativity: <i>true</i>,</p>
                <p>&nbsp; coding: <i>true</i>,</p>
                <p>&nbsp; security: <i>true</i></p>
                <p>{"}"}</p>

                <p className="terminal-text">
                  &gt; Building my future_
                </p>
              </div>

            </div>

            <div className="laptop-base"></div>

          </div>

          <div className="workspace-glow"></div>

          <div className="visual-caption">
            <span>MY DIGITAL SPACE</span>
            <span>01 / 06</span>
          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="section about-section" id="about">

        <div className="section-heading">
          <span>01 — GET TO KNOW ME</span>
          <h2>A little about <em>myself.</em></h2>
        </div>

        <div className="about-grid">

          <div className="about-number">01</div>

          <div className="about-text">

            <h3>
              Curiosity drives me.
              <br />
              Technology inspires me.
            </h3>

            <p>
              I'm Chandni G Sharma, a BCA graduate-in-progress
              with an interest in Full Stack Development and
              Cybersecurity.
            </p>

            <p>
              I enjoy creating web applications, working with
              databases and exploring how networks and security
              work behind the scenes.
            </p>

            <p>
              I'm a quick learner and problem solver who believes
              that every project is an opportunity to learn
              something new.
            </p>

          </div>

          <div className="about-highlight">

            <span>MY APPROACH</span>

            <h3>
              Learn.
              <br />
              Build.
              <br />
              <em>Improve.</em>
            </h3>

            <div className="highlight-line"></div>

            <p>
              Small steps. Consistent growth. Better solutions.
            </p>

          </div>

        </div>

      </section>
<Skills />
      {/* SKILLS SECTION */}
      <section className="section skills-section" id="skills">

        <div className="section-heading">
          <span>02 — WHAT I WORK WITH</span>
          <h2>My tech <em>toolkit.</em></h2>
        </div>

        <div className="skills-layout">

          <div className="skills-intro">

            <h3>
              Building my skills, one project at a time.
            </h3>

            <p>
              These are the technologies I've explored and
              continue to improve through practical projects
              and learning.
            </p>

          </div>

          <div className="skills-list">

            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {skill}

                <b>↗</b>

              </div>
            ))}

          </div>

        </div>

      </section>
      

      {/* PROJECTS SECTION */}
      <section className="section projects-section" id="projects">

        <div className="section-heading">
          <span>03 — THINGS I'VE CREATED</span>
          <h2>Selected <em>projects.</em></h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <span className="project-arrow">↗</span>
              </div>

              {/* PROJECT IMAGE */}
              <div className="project-art">

                {project.image ? (

                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-screenshot"
                    onError={(e) => {
                      console.error(
                        "Unable to load image:",
                        project.image
                      );
                      e.currentTarget.style.display = "none";
                    }}
                  />

                ) : (

                  <>
                    <div className="art-circle"></div>

                    <div className="art-window">
                      <span>● ● ●</span>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <span className="art-symbol">
                      {"</>"}
                    </span>
                  </>

                )}

              </div>

              {/* PROJECT DETAILS */}
              <span className="project-type">
                {project.type}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              {/* TECHNOLOGY TAGS */}
              <div className="project-tags">

                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}

              </div>

              {/* GITHUB BUTTON */}
              {project.github ? (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <span>View on GitHub</span> ↗
                </a>

              ) : (

                <span className="github-pending">
                  GitHub link coming soon
                </span>

              )}

            </article>

          ))}

        </div>

      </section>

      {/* EDUCATION SECTION */}
      <section className="section education-section" id="education">

        <div className="section-heading">
          <span>04 — MY JOURNEY</span>
          <h2>Education & <em>growth.</em></h2>
        </div>

        <div className="education-card">

          <div className="education-year">01</div>

          <div>

            <span>UNDERGRADUATE</span>

            <h3>
              Bachelor of Computer Applications
            </h3>

            <p>
              Building a foundation in programming, databases,
              software development and computer networks.
            </p>

          </div>

          <div className="education-status">
            BCA
          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-section" id="contact">
<Contact />
        <span>05 — HAVE A PROJECT IN MIND?</span>

        <h2>
          Let's create
          <br />
          <em>something great.</em>
        </h2>

        <p>
          I'm always interested in learning, connecting
          and exploring new opportunities.
        </p>

        <a
          href="https://www.linkedin.com/in/chandni-gsharma-888b71317/"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          Connect on LinkedIn ↗
        </a>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <a href="#home" className="logo">
          CHANDNI<span>.</span>
        </a>

        <p>
          Designed with curiosity & built with passion.
        </p>

        <a href="#home">
          BACK TO TOP ↑
        </a>

<footer className="footer">
  <div className="footer-content">
    <h3>Chandni<span>.</span></h3>

    <p>Building my journey, one line of code at a time.</p>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-socials">
      <a href="https://github.com/chandnigsharma777-alt"
         target="_blank" rel="noreferrer">GitHub ↗</a>

      <a href="https://www.linkedin.com/in/chandni-gsharma-888b71317/"
         target="_blank" rel="noreferrer">LinkedIn ↗</a>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Chandni G Sharma. Made with care.</p>
      <a href="#home">Back to top ↑</a>
    </div>
  </div>
</footer>

      </footer>

    </div>
  );
}

export default App;
