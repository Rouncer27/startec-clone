import "./project.scss";

const Project = ({ project }) => {
  return (
    <div className="project-slide">
      <div className="project-slide-image">
        <img
          src={project.node.projectPost.featuredImage.image.node.sourceUrl}
          alt={project.node.projectPost.featuredImage.image.node.altText}
        />
      </div>
      <div className="project-slide-wrapper">
        <div className="project-slide-title">
          <h3>{project.node.title}</h3>
        </div>
        <div className="project-slide-excerpt">
          <p
            dangerouslySetInnerHTML={{
              __html: project.node.projectPost.excerpt.content,
            }}
          />
        </div>
        <div className="project-slide-button">
          <a href={`${project.node.uri}`}>View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
