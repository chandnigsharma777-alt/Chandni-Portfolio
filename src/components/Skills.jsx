
function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Creating responsive and user-friendly interfaces.",
      logos: [
        ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
        ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
        ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
        ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
        ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"],
      ],
    },
    {
      number: "02",
      title: "Backend Development",
      description: "Building application logic and connecting databases.",
      logos: [
        ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
        ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"],
        ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
        ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
      ],
    },
    {
      number: "03",
      title: "Cybersecurity",
      description: "Learning security concepts and network protection.",
      logos: [
        ["Networking", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"],
        ["Cybersecurity", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"],
      ],
    },
    {
      number: "04",
      title: "Tools & Platforms",
      description: "Tools used for development and project management.",
      logos: [
        ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"],
        ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
        ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
        ["Postman", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"],
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p className="section-tag">MY EXPERTISE</p>
        <h2>Technical <span>Skills</span></h2>
        <p>Technologies and tools I use to build and explore.</p>
      </div>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.number}>
            <div className="skill-top">
              <div className="skill-icon">
                {group.logos.map(([name, src]) => (
                  <div className="skill-logo" key={name}>
                    <img
                      src={src}
                      alt={name}
                      title={name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "block";
                      }}
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <span className="skill-number">{group.number}</span>
            </div>

            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
