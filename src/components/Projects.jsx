
function Projects() {
  const projectList = [
    {
      number: "01",
      name: "Smart Expense Tracker",
      category: "Full Stack Development",
      description:
        "A personal finance application to manage income, expenses and track account balances with database storage.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      status: "Completed"
    },
    {
      number: "02",
      name: "Destiny Travels",
      category: "Web Application",
      description:
        "A travel destination management application to organize and display destinations with details like location, rating and price.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      status: "Completed"
    },
    {
      number: "03",
      name: "CineBook",
      category: "Frontend Development",
      description:
        "A movie-related web application developed to practise frontend development and interactive user interfaces.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "Completed"
    },
    {
      number: "04",
      name: "Course Central",
      category: "React Application",
      description:
        "A course browsing application that organizes learning courses into categories using reusable React components.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "In Progress"
    },
    {
      number: "05",
      name: "Type Rush",
      category: "Interactive Web Application",
      description:
        "A typing speed application featuring a countdown timer and an interactive typing experience.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "In Progress"
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="section-heading">
        <p className="section-tag">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p>
          Some of the applications I have developed
          while learning and exploring technology.
        </p>
      </div>

      <div className="projects-container">

        {projectList.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-status">
                {project.status}
              </span>
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.name}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
