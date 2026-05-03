function ProjectCard({ title, description, onRemove }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProjectCard;