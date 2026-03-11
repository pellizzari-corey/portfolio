export default function Home() {
  return (
    <div className="page">
      <section className="hero section">
        <div className="container">
          <span className="eyebrow">Cloud Engineer • AWS • DevOps</span>

          <h1 className="hero-title">Hi, I’m Corey.</h1>

          <p className="hero-subtitle">
            I build cloud infrastructure, deployment workflows, and reliable
            platforms with AWS, containers, identity, and infrastructure as code.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/projects">
              View My Work
            </a>
            <a className="button" href="/contact">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What I Focus On</h2>

          <div className="grid grid-3">
            <article className="card">
              <h3>AWS Infrastructure</h3>
              <p>
                Designing and supporting cloud environments with services like
                ECS, CloudFront, Route 53, S3, IAM, and networking components.
              </p>
            </article>

            <article className="card">
              <h3>Automation & IaC</h3>
              <p>
                Building repeatable deployments and infrastructure workflows with
                tools like AWS CDK, Terraform, CI/CD, and scripting.
              </p>
            </article>

            <article className="card">
              <h3>Identity & Platforms</h3>
              <p>
                Working with modern platform tooling, secure access patterns, and
                identity systems such as Keycloak.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <h2 className="section-title">Current Goal</h2>
            <p>
              This site is my personal corner of the internet for showcasing my
              resume, technical projects, architecture ideas, and body of work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}