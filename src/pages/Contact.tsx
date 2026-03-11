export default function Contact() {
  return (
    <div className="page">
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">Contact</span>
          <h1 className="page-title">Let’s connect</h1>
          <p className="page-subtitle">
            You can find me through the links below as this site continues to
            grow.
          </p>

          <div className="stack">
            <div className="card">
              <h2>GitHub</h2>
              <p>
                Share code, labs, and infrastructure work.
              </p>
              <a
                className="text-link"
                href="https://github.com/pellizzari-corey"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub
              </a>
            </div>

            <div className="card">
              <h2>LinkedIn</h2>
              <p>
                Professional background, experience, and networking.
              </p>
              <a
                className="text-link"
                href="https://linkedin.com/in/corey-pellizzari-808168122/"
                target="_blank"
                rel="noreferrer"
              >
                Visit LinkedIn
              </a>
            </div>

            <div className="card">
              <h2>Email</h2>
              <p>
                Email for inquries
              </p>
              <a className="text-link" href="mailto:you@example.com">
                pellizzari.corey@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}