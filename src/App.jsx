import { useState } from "react";
import "./styles.css";
import { projects } from "./projectsData";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("es"); // Idioma por defecto: español

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  const content = {
    es: {
      header: "Jose Fuentes ",
      aboutTitle: "Sobre mí",
      aboutText:
        "Full stack Developer. con experiencia en JavaScript, TypeScript, Node.js React.js y bases de datos como MongoDB, MySQL, PostgreSQL y Firebase. Disfruto resolver desafíos complejos, aprender continuamente y asegurar la calidad del código.Aunque mi pasión es el back-end, tengo conocimientos de front-end que me permiten colaborar de manera integral en proyectos. Me motiva el aprendizaje constante, el trabajo en equipo y la implementación de buenas prácticas, siempre buscando aportar valor y mejorar día a día.",
      skillsTitle: "Habilidades y Tecnologías",
      projectsTitle: "Proyectos",
      projectDescription: "Descripción breve del proyecto.",
      techUsed: "Tecnologías usadas:",
      contactTitle: "Contacto",
      contactText:
        "Mira mi LinkedIn, accede a mis repositorios de GitHub o contáctame a través de mi correo",
    },
    en: {
      header: "Jose Fuentes",
      aboutTitle: "About Me",
      aboutText:
        "Full stack Developer. with experience in JavaScript, TypeScript, Node.js React.js and databases such as MongoDB, MySQL, PostgreSQL and Firebase. I enjoy solving complex challenges, continuously learning, and ensuring code quality. Although my pasion is the back-end, I have front-end knowledge that allows me to collaborate comprehensively on projects. I am motivated by constant learning, teamwork and the implementation of good practices, always seeking to add value and improve day by day.",
      skillsTitle: "Skills and Technologies",
      projectsTitle: "Projects",
      projectDescription: "Brief description of the project.",
      techUsed: "Technologies used:",
      contactTitle: "Contact",
      contactText:
        "Check out my LinkedIn, access my GitHub repositories, or contact me via email",
    },
  };

  return (
    <div className={theme}>
      <header>
        <div className="container">
          <h1>{content[language].header}</h1>
          <div className="header-icons">
            <a
              href="https://www.linkedin.com/in/jose-fuentes12/"
              className="social-icon linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Jose-1204"
              className="social-icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:jose0156.114@gmail.com"
              className="social-icon gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === "es" ? "ENG" : "ESP"}
          </button>
        </div>
      </header>

      <main>
        <section id="about">
          <h2>{content[language].aboutTitle}</h2>
          <p>{content[language].aboutText}</p>
        </section>

        <section id="skills">
          <h2>{content[language].skillsTitle}</h2>
          <div className="skills-grid">
            {[
              {
                name: "JavaScript",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
              },
              {
                name: "TypeScript",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
              },
              {
                name: "Python",
                img: "https://imgs.search.brave.com/Gc4o0TZByHDXOrUog0t60tOvt-BmVp3pOLjo8FdPnCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n",
              },
              {
                name: "HTML",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
              },
              {
                name: "CSS",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
              },
              {
                name: "Tailwind",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              },
              {
                name: "Node.js",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
              },
              {
                name: "Flask",
                img: "https://imgs.search.brave.com/Oo81WTaevpn16i-DrCZPR8NC9qGC5ldklhY7QU2AmOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzk4/LTk4NTAzMl9mbGFz/ay1sb2dvLWZsYXNr/LXB5dGhvbi1pY29u/LnBuZw",
              },
              {
                name: "Express.js",
                img: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png",
              },
              {
                name: "React.js",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              },
              {
                name: "MongoDB",
                img: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
              },
              {
                name: "Firebase",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
              },
              {
                name: "MySQL",
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
              },
              {
                name: "PostgreSQL",
                img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
              },
              {
                name: "Postman",
                img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
              },
              {
                name: "GitHub",
                img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
              },
              {
                name: "Docker",
                img: "https://cdn.worldvectorlogo.com/logos/docker.svg",
              },
            ].map((tech, index) => (
              <div key={index} className="skill-card">
                <img src={tech.img} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
  <h2>{content[language].projectsTitle}</h2>
  <div className="projects-grid">
    {projects.map((project) => (
      <div key={project.id} className="project-card">
        <div className="project-header">
          <h3>{project.title}</h3>
          <div className="project-links">
            <a
              href={project.githubLink}
              className="github-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            {project.renderLink && (
              <a
                href={project.renderLink}
                className="demo-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> {content[language].demo}
              </a>
            )}
          </div>
        </div>
        
        <p className="project-description">{project.description[language]}</p>
        
        <div className="project-tech">
          <div className="tech-tags">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

        <section id="contact">
          <h2>{content[language].contactTitle}</h2>
          <div className="header-icons">
            <a
              href="www.linkedin.com/in/jose-fuentes12"
              className="social-icon linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Jose-1204"
              className="social-icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:jose0156.114@gmail.com"
              className="social-icon gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p>{content[language].contactText}</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Jose Fuentes.</p>
      </footer>
    </div>
  );
};

export default App;
