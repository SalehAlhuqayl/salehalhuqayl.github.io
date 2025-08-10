# Portfolio Website - Saleh Aluqayl

A modern, production-ready personal portfolio website built with Astro and Tailwind CSS, showcasing data science expertise and professional work.

## 🎯 Project Overview

This portfolio website serves as a comprehensive digital presence for Saleh Aluqayl, a Data Scientist based in Riyadh, KSA. The site emphasizes clean design, performance, and easy content management through centralized configuration.

## ✨ Key Features

### 🏗️ Architecture
- **Framework**: Astro 5.x for optimal performance and SEO
- **Styling**: Tailwind CSS 4.x for modern, responsive design
- **Content Management**: Centralized JSON/YAML configuration for easy updates
- **Assets**: All resources (PDFs, images, icons) organized in `/public`
- **Deployment**: Optimized for Vercel deployment

### 📱 Site Structure
- **Home** (`/`) - Hero section with metrics and selected work preview
- **Work** (`/work`) - Detailed case studies with Problem → Approach → Impact format
- **Projects** (`/projects`) - Technical projects with stack details and links
- **About** (`/about`) - Professional bio, skills, and certifications
- **Contact** (`/contact`) - Contact information and form
- **Resume** (`/resume`) - Embedded PDF viewer with download option

### 🎨 Design Principles
- **Performance First**: Static site generation with minimal JavaScript
- **Mobile Responsive**: Tailored experience across all devices
- **Professional Aesthetic**: Clean, modern design focused on content
- **Accessibility**: WCAG compliant with semantic HTML structure

## 🚀 Technical Stack

```json
{
  "framework": "Astro 5.12.9",
  "styling": "Tailwind CSS 4.1.11",
  "language": "TypeScript (strict mode)",
  "package_manager": "pnpm",
  "deployment": "Vercel",
  "content": "JSON/YAML configuration"
}
```

## 📊 Content Management

All site content is managed through a single configuration file (`src/content/site-data.json`), including:

- Personal branding (name, title, tagline)
- Navigation structure
- Project details and case studies
- Contact information and social links
- Professional metrics and achievements

**Example Structure**:
```json
{
  "brand": {
    "name": "Saleh Aluqayl",
    "title": "Data Scientist",
    "tagline": "Turning messy data into measurable business impact.",
    "email": "SalehAlhuqayl@gmail.com",
    "location": "Riyadh, KSA"
  },
  "nav": [...],
  "projects": [...],
  "social": {...}
}
```

## 🛠️ Development Environment

- **OS**: Windows 10/11
- **Node.js**: LTS (v20.x)
- **Package Manager**: pnpm (global installation)
- **Editor**: Cursor/VS Code with Astro extensions
- **Version Control**: Git

## 📋 Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Astro CLI commands
pnpm astro [command]
```

## 🎯 Target Audience

**Primary**: Potential employers and clients in data science/analytics
**Secondary**: Professional network and collaborators
**Tertiary**: Technical community and peers

## 🔄 Project Status

- ✅ Initial Astro + Tailwind setup complete
- ✅ Development environment configured
- ⏳ Content structure design in progress
- ⏳ Component development pending
- ⏳ Page implementation pending
- ⏳ Content management system pending

## 📈 Success Metrics

- **Performance**: Lighthouse score 95+
- **SEO**: Optimized meta tags and structure
- **Accessibility**: WCAG 2.1 AA compliance
- **User Experience**: Fast loading, intuitive navigation
- **Maintainability**: Single-source content management

## 🎨 Design Goals

1. **Professional First Impression**: Clean hero section with clear value proposition
2. **Data-Driven Storytelling**: Quantified impact in project case studies
3. **Technical Credibility**: Detailed project breakdowns with tech stacks
4. **Easy Contact**: Multiple touchpoints for potential opportunities
5. **Resume Integration**: Seamless PDF viewing and download experience

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets (PDFs, images, icons)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Site data configuration
│   ├── layouts/         # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles and Tailwind config
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies and scripts
```

---

**Author**: Saleh Aluqayl  
**Contact**: SalehAlhuqayl@gmail.com  
**LinkedIn**: [linkedin.com/in/salehaluqayl](https://www.linkedin.com/in/salehaluqayl/)  
**GitHub**: [github.com/SalehAluqayl](https://github.com/SalehAluqayl)