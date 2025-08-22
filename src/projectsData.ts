export interface Project {
  id: number;
  title: string;
  description: {
    es: string;
    en: string;
  };
  githubLink: string;
  renderLink?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ticket System",
    description: {
      es: "Sistema de tickets CRUD con MongoDB Atlas, Node.js y Express. Implementa autenticación JWT y despliegue en Render.",
      en: "CRUD ticket system with MongoDB Atlas, Node.js and Express. Implements JWT authentication and Render deployment.",
    },
    githubLink: "https://github.com/Jose-1204/ticket-system",
    renderLink: "https://ticket-system-37ac.onrender.com",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Render"],
  },
  {
    id: 3,
    title: "Inventory Manager",
    description: {
      es: "Sistema de gestión de inventarios full-stack con implementación de Python con Flask para el backend y React para el frontend.",
      en: "Full-stack inventory management system with Python Flask for the backend and React for the frontend.",
    },
    githubLink: "https://github.com/Jose-1204/inv-manager",
    techStack: ["Python", "Flask", "React", "SQLAlchemy"],
  },
  {
    id: 4,
    title: "Password-generator",
    description: {
      es: "Generador seguro de contraseñas con personalización avanzada realizado en Python.",
      en: "Secure password generator with advanced customization built in Python.",
    },
    githubLink: "https://github.com/Jose-1204/password-generator",
    techStack: ["Python", "Cryptography"],
  },
  {
    id: 5,
    title: "Production Line Simulator",
    description: {
      es: "Simulador de línea de producción con algoritmos de optimización en Python.",
      en: "Production line simulator with optimization algorithms built in Python.",
    },
    githubLink: "https://github.com/Jose-1204/production-line-simulator",
    techStack: ["Python", "NumPy"],
  },
];
