
function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-heading">
        <p className="section-tag">LET'S CONNECT</p>
        <h2>Get In <span>Touch</span></h2>
        <p>Have an opportunity or a project in mind? Let's talk!</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's create something meaningful.</h3>

          <p>
            I'm always interested in learning, connecting
            and exploring new opportunities in technology.
          </p>

          <div className="contact-detail">
            <span>✉</span>
            <div>
              <small>EMAIL</small>
              <p>chandnigsharma777@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>⌘</span>
            <div>
              <small>GITHUB</small>
              <a href="https://github.com/chandnigsharma777-alt"
                 target="_blank" rel="noreferrer">
                View my GitHub
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span>in</span>
            <div>
              <small>LINKEDIN</small>
              <a href="https://www.linkedin.com/in/chandni-gsharma-888b71317/"
                 target="_blank" rel="noreferrer">
                Connect with me
              </a>
            </div>
          </div>
        </div>

        <div className="contact-message">
          <h3>Send a Message</h3>

          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />

            <button type="submit">Let's Connect ↗</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
