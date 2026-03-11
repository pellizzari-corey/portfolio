export default function About() {
  return (
    <div className="page">
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">About</span>
          <h1 className="page-title">A little about me</h1>

          <div className="stack">
            <div className="card">
              <p>
                I’m a cloud engineer focused on building and supporting reliable,
                secure, and maintainable systems. I enjoy working on AWS
                architecture, infrastructure as code, deployment automation, and
                platform engineering.
              </p>
            </div>

            <div className="card">
              <p>
                My interests span cloud-native applications, identity and access
                management, containers, CI/CD, and practical engineering
                solutions that make environments easier to deploy and operate.
              </p>
            </div>

            <div className="card">
              <p>
                This portfolio is where I’m collecting projects, experiments, and
                technical write-ups that reflect both my day-to-day work and the
                things I build for myself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}