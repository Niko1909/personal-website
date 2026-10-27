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
    logo: "/company-logos/intact.svg",
    period: "2025 to Present",
    summary:
      "I spent a year leading frontend development for production AI applications. Since then, I’ve expanded my scope to include backend development and automated testing. I’m currently building an end-to-end test suite to improve confidence in production deployments.",
  },
  {
    role: "Software Developer Intern",
    organization: "IBM · Canada Software Lab",
    logo: "/company-logos/ibm.svg",
    period: "2022 to 2023",
    summary:
      "Built Python automation estimated to save internal account-management teams more than 500 hours of manual work per week.",
  },
];

export const productionWork = {
  title: "Production AI engineering at Intact",
  contributions: [
    {
      title: "Frontend ownership",
      description: "Led React and TypeScript development for a year, extending shared application code for additional teams.",
    },
    {
      title: "Backend modernization",
      description: "Migrated a FastAPI/PostgreSQL backend from synchronous to asynchronous I/O across database access, downstream-service clients, and API endpoints.",
    },
    {
      title: "Testing and delivery",
      description: "Building an end-to-end test suite that provisions real AWS resources and invokes services directly. Also write Vitest and pytest tests, maintain GitLab CI/CD pipelines, and contribute to infrastructure through Terraform.",
    },
  ],
};

const chessProject = {
  title: "Distilling Chess Intelligence",
  summary:
    "Built a pipeline to generate 15,000 Leela Chess Zero evaluations and compare nine compact models. The convolutional models fit the training data more closely but did not beat the linear baseline on held-out positions.",
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
    title: "AI & machine learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "RAG", "Computer vision"],
  },
  {
    title: "Product engineering",
    skills: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Vitest & pytest"],
  },
  {
    title: "Cloud & infrastructure",
    skills: ["AWS", "GCP", "Terraform", "Docker", "GitLab CI/CD", "Linux"],
  },
];
