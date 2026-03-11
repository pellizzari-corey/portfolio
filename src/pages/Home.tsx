export default function Home() {
  return (
    <div className="page">
      <section className="hero section">
        <div className="container narrow splash">
          <span className="eyebrow">🚧 Site Under Construction</span>

          <h1 className="hero-title">Corey Pellizzari</h1>

          <p className="hero-subtitle">
            Cloud Engineer • DevOps • AWS
          </p>

          <div className="panel splash-panel">
            <p className="splash-text">
              My portfolio site is currently being built.
            </p>
            <p className="splash-text muted">
              Check back soon to see projects, labs, cloud architecture work,
              and my broader body of work.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/pellizzari-corey"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="button"
                href="https://linkedin.com/in/corey-pellizzari-808168122/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <p className="splash-footer">Hosted on AWS S3 + CloudFront</p>
        </div>
      </section>
    </div>
  );
}