import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Cloud Engineer • DevOps • AWS</p>
        <h1>Corey Pellizzari</h1>
        <p className="subtitle">
          Building cloud infrastructure, automation, and modern platforms.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/pellizzari-corey" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/corey-pellizzari-808168122/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <main className="content">
        <section className="card">
          <h2>About</h2>
          <p>
            I’m a cloud engineer focused on AWS, infrastructure as code,
            containers, identity, and platform automation.
          </p>
        </section>

        <section className="card">
          <h2>Projects</h2>
          <p>
            This site will showcase my portfolio projects, architecture work,
            and technical experiments.
          </p>
        </section>

        <section className="card">
          <h2>Status</h2>
          <p>🚧 This portfolio is currently under construction.</p>
        </section>
      </main>
    </div>
  );
}

export default App;