import { frontmatter as hemorrhage } from "../../content/case-studies/intracranial-hemorrhage-detection.md";

export const profile = {
  name: "Nikolas Marinkovich",
  email: "niko.marinkovich@gmail.com",
  github: "https://github.com/Niko1909",
  linkedin: "https://www.linkedin.com/in/niko-marinkovich/",
};

export const experience = [
  {
    role: "AI Developer I",
    organization: "Intact Insurance · Data Lab",
    period: "2025 to Present",
    summary:
      "Leading frontend development for production AI applications, with responsibilities spanning backend performance, automated testing, and cloud delivery.",
    technologies: ["TypeScript", "React", "FastAPI", "PostgreSQL", "AWS", "Terraform"],
  },
  {
    role: "Software Developer Intern",
    organization: "IBM · Canada Software Lab",
    period: "2022 to 2023",
    summary:
      "Designed cross-platform automation and document-data tools that removed more than 500 hours of manual work each week for internal teams.",
    technologies: ["Python", "Microsoft Office APIs", "Automation"],
  },
];

export const productionWork = {
  title: "Production AI engineering at Intact",
  role: "AI Developer I",
  period: "2025 to present",
  summary:
    "At Intact Insurance's Data Lab, I lead frontend development for production AI applications, with responsibilities spanning backend performance, automated testing, and cloud delivery.",
  contributions: [
    {
      title: "Frontend ownership",
      description: "Lead React and TypeScript development, extending shared application code for additional teams.",
    },
    {
      title: "Backend modernization",
      description: "Migrated a FastAPI/PostgreSQL backend from synchronous to asynchronous I/O across database access, downstream-service clients, and API endpoints.",
    },
    {
      title: "Testing and delivery",
      description: "Write automated tests with Vitest and pytest, maintain GitLab CI/CD pipelines, and contribute to AWS infrastructure through Terraform.",
    },
  ],
};

const chessProject = {
  eyebrow: "Undergraduate thesis · 2024",
  title: "Distilling Chess Intelligence",
  question: "Can a compact neural network learn how a powerful chess engine sees the board?",
  summary:
    "I built an end-to-end pipeline that generated 15,000 Leela Chess Zero evaluations and compared nine smaller model architectures. Deeper models fit the training data more closely, but none beat a linear baseline on held-out positions. It was a useful lesson in generalization, representation, and experimental scope.",
  metrics: [
    { value: "15,000", label: "LC0-labelled positions" },
    { value: "9", label: "model architectures" },
    { value: "~42h", label: "teacher evaluation budget" },
  ],
  technologies: ["PyTorch", "Knowledge distillation", "CNNs", "Experimental ML"],
};

export const academicProjects = [
  {
    title: chessProject.title,
    period: "Undergraduate thesis · 2024",
    summary: chessProject.summary,
    technologies: chessProject.technologies,
    href: "/work/distilling-chess-intelligence/",
    kind: "chess",
  },
  {
    title: hemorrhage.card_title as string,
    period: "Engineering capstone · 2023",
    summary: hemorrhage.card_summary as string,
    technologies: ["Python", "pydicom", "Medical imaging", "Model evaluation"],
    href: "/work/intracranial-hemorrhage-detection/",
    kind: "medical",
  },
];

export const capabilities = [
  {
    index: "01",
    title: "AI & machine learning",
    description:
      "From experimental models to production retrieval and language-model workflows.",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "RAG", "Computer vision"],
  },
  {
    index: "02",
    title: "Product engineering",
    description:
      "Interfaces and services that turn model capabilities into dependable user experiences.",
    skills: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Vitest & pytest"],
  },
  {
    index: "03",
    title: "Cloud & infrastructure",
    description:
      "Repeatable systems for deploying, operating, and improving intelligent products.",
    skills: ["AWS", "GCP", "Terraform", "Docker", "GitLab CI/CD", "Linux"],
  },
];
