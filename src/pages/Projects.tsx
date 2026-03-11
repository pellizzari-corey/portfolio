const projects = [
  {
    title: "AWS Portfolio Site",
    description:
      "A personal portfolio hosted with S3, CloudFront, Route 53, and HTTPS, designed to showcase projects and experience.",
    tags: ["React", "S3", "CloudFront", "Route 53"],
  },
  {
    title: "Infrastructure as Code Work",
    description:
      "Infrastructure patterns and deployments using AWS CDK and Terraform for repeatable cloud environments.",
    tags: ["AWS CDK", "Terraform", "IaC"],
  },
  {
    title: "Containerized Platform Services",
    description:
      "Experiments and implementations involving ECS/Fargate, service routing, and application deployment design.",
    tags: ["ECS", "Fargate", "Containers"],
  },
  {
    title: "Identity & Access Integrations",
    description:
      "Projects and support work related to Keycloak, secure authentication flows, and platform integration.",
    tags: ["Keycloak", "IAM", "Security"],
  },
];

export default function Projects() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <span className="eyebrow">Projects</span>
          <h1 className="page-title">Things I’m building and exploring</h1>
          <p className="page-subtitle">
            A mix of professional work, personal labs, and portfolio-ready
            technical projects.
          </p>

          <div className="grid grid-2">
            {projects.map((project) => (
              <article className="card project-card" key={project.title}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}