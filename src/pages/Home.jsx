import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showProjects, setShowProjects] = useState(true);
  const [heading, setHeading] = useState("Welcome to My Portfolio");

  const [projects, setProjects] = useState([
    {
      title: "Travel Page 1",
      description: "A travel webpage created using HTML and CSS."
    },
    {
      title: "Travel Page 2",
      description: "Another travel section from my portfolio website."
    }
  ]);

  const changeHeading = () => {
    setHeading("Thanks for visiting my portfolio!");
  };

  const addProject = () => {
    const newProject = {
      title: "New Project",
      description: "This project was added using React state."
    };

    setProjects([...projects, newProject]);
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((project, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
      <section id="home" className="hero">
        <h1>{heading}</h1>
        <p>This portfolio is converted from HTML/CSS to React.</p>

        <Button text="Update Text" onClick={changeHeading} />

        <Button
          text={showProjects ? "Hide Projects" : "Show Projects"}
          onClick={() => setShowProjects(!showProjects)}
        />
      </section>

      {showProjects && (
        <section id="projects">
          <h2>My Projects</h2>

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              onRemove={() => removeProject(index)}
            />
          ))}

          <Button text="Add Project" onClick={addProject} />
        </section>
      )}

      <ContactForm />
    </MainLayout>
  );
}

export default Home;