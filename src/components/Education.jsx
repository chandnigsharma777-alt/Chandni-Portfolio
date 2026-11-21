
function Education() {
  const education = [
  {
    number: "01",
    label: "EDUCATION",
    title: "Bachelor of Computer Applications",
    place: "Bangalore University",
    description:
      "Learning programming, database management, software development, computer networks and cybersecurity fundamentals.",
    tag: "BCA",
    year: "ACADEMIC JOURNEY",
  },
];

  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p className="section-tag">MY JOURNEY</p>
        <h2>
          Education & <span>Certifications</span>
        </h2>
        <p>My academic background and continuous learning journey.</p>
      </div>

      <div className="education-container">
        {education.map((item) => (
          <div className="education-card" key={item.number}>
            <div className="education-icon">
              {item.number}
            </div>

            <div className="education-content">
              <div className="education-top">
                <p className="education-label">{item.label}</p>
                <span className="education-year">{item.year}</span>
              </div>

              <h3>{item.title}</h3>
              <p className="education-place">{item.place}</p>
              <p className="education-description">
                {item.description}
              </p>

              <span className="education-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
