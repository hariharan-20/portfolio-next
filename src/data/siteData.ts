// data/siteData.ts

export const hero = {
    name: "Hariharan",
    role: "Front-End Engineer",
    subtitle:
        "I build high-performance, scalable Front-end applications for e-commerce, SaaS, and enterprise platforms.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Download Resume",
    image: "/profile.png",
    location: "Chennai, India",
    resumeUrl: "https://1drv.ms/b/c/95b2e6cad4292c9b/IQAphPia1nj8Ro_Y4oPbynbQARqPjIu-bNVBOCthppNmbl4?e=7HZmup",
    social: {
        email: "k.hariharan.0520@gmail.com",
        linkedin: "https://www.linkedin.com/in/hari--haran/"
    }
};

export const about = {
    title: "About Me",
    description:
        "Front-end engineer with 4+ years of experience building fast, scalable React applications. I specialize in component-driven architecture, performance tuning, API integrations, and designing intuitive user experiences. I love solving complex UI problems and turning product ideas into polished interfaces.",
    highlights: [
        "4+ years experience in React.js, JavaScript, TypeScript",
        "Performance optimization for enterprise and e-commerce",
        "Strong focus on reusable UI component systems",
        "Experienced with GraphQL, REST, and modern tooling"
    ]
};

export const skills = {
    title: "Skills",
    categories: [
        {
            name: "Frontend",
            items: [
                "React.js",
                "Angular",
                "JavaScript (ES6+)",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Less",
                "Sass"
            ]
        },
        {
            name: "Architecture & Performance",
            items: [
                "Component-Driven Architecture",
                "Lazy Loading",
                "Code Splitting",
                "Memoization"
            ]
        },
        {
            name: "APIs & Backend",
            items: ["REST APIs", "GraphQL", "SQL"]
        },
        {
            name: "Tools & Platforms",
            items: ["VS Code", "GitHub", "Postman", "Figma", "Azure Data Studio", "Antigravity"]
        },
        {
            name: "Soft Skills",
            items: [
                "Communication",
                "Problem Solving",
                "Leadership",
                "Agile Collaboration"
            ]
        }
    ]
};

export const experience = {
    title: "Professional Experience",
    jobs: [
        {
            company: "Altimetrik India Pvt Ltd",
            client: "Samsung E-commerce Platform",
            role: "Senior Engineer – React.js",
            period: "Jan 2025 – Present",
            description:
                "Leading development of Samsung’s cart & checkout experiences, delivering global-scale performance and seamless UX.",
            highlights: [
                "Built responsive cart and checkout flows with optimized rendering.",
                "Implemented promotion banners & Trade-In pop-ups improving engagement by 18–25%.",
                "Improved checkout success rates by 15% through critical UI fixes."
            ]
        },
        {
            company: "Lumel Technologies Pvt Ltd",
            role: "Product Developer",
            period: "May 2021 – Dec 2024",
            description:
                "Developed scalable UI components and performance-optimized modules for enterprise analytics products.",
            highlights: [
                "Created reusable React component libraries improving maintainability by 60%.",
                "Reduced page load time by 30% via bundle optimization & caching.",
                "Integrated GraphQL APIs for fast and scalable data loads.",
                "Cut bug resolution time by 40% using advanced debugging tools."
            ]
        },
        {
            company: "Verzeo EduTech",
            role: "React Developer Intern",
            period: "Jan 2021 – Apr 2021",
            description:
                "Built modular React components and contributed to internal UI systems.",
            highlights: [
                "Created custom UI libraries accelerating development by 35%.",
                "Improved coding standards with linting, boosting productivity by 25%."
            ]
        }
    ]
};

export const projects = {
    title: "Projects",
    items: [
        {
            name: "Samsung E-commerce Shopping Cart",
            role: "Frontend Engineer",
            description:
                "Engineered a responsive, high-performance cart & checkout workflow for Samsung’s global e-commerce ecosystem.",
            features: [
                "Optimized rendering and state management",
                "Reduced checkout drop-offs",
                "Improved page load speed by 20%"
            ],
            caseStudy: {
                problem: "The legacy checkout system suffered from slow load times and complex state synchronization issues, leading to a high cart abandonment rate during high-traffic events.",
                solution: "Re-architected the cart state management using Recoil for atomic updates and implemented optimistic UI updates. Utilized Next.js SRR for initial load speed and lazy-loaded non-critical components.",
                impact: "Reduced page load time by 40%, improved checkout conversion rate by 15%, and successfully handled 3x peak traffic during product launches.",
                stack: ["React", "Next.js", "Recoil", "styled-components", "Jest"]
            }
        },
        {
            name: "ValQ – InfoBridge Integration",
            role: "Frontend Developer",
            description:
                "Enabled scenario modeling, budgeting, and analytics for Power BI using ValQ and InfoBridge.",
            features: [
                "No-code data transformation workflows",
                "Write-back capabilities",
                "Enterprise-grade UI integration"
            ],
            caseStudy: {
                problem: "Users needed a way to perform complex financial modeling and write-back operations directly within Power BI without leaving the interface, which was limited by default visuals.",
                solution: "Developed a custom Power BI visual using React that interfaced with a robust calculation engine. Implemented a virtualization layer for handling large datasets smoothly.",
                impact: "Enabled enterprise customers to reduce budgeting cycle time by 50% and improving data accuracy with direct write-back capabilities.",
                stack: ["React", "TypeScript", "Power BI SDK", "D3.js", "Redux"]
            }
        }
    ]
};

export const education = {
    title: "Education",
    items: [
        {
            degree: "Master’s in Software Systems",
            institution: "PSG College of Arts and Science, Coimbatore",
            period: "2016 – 2021"
        }
    ]
};

export const achievements = {
    title: "Achievements & Leadership",
    items: [
        "Go-Getter of the Year – Lumel Technologies",
        "Best Performer of the Month – Verzeo Internship",
        "Chairman, Department of Computer Science – PSG CAS (2019–2020)"
    ]
};

export const languages = {
    title: "Languages",
    items: ["Tamil (Native)", "English (Fluent)"]
};
