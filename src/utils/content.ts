import type { SiteData, Project, Highlight, NavItem, Certification, AboutData, ContactData } from '../types/content';
import siteDataJson from '../content/site-data.json';

/**
 * Get the complete site data configuration
 * @returns SiteData object with all site content
 */
export function getSiteData(): SiteData {
  return siteDataJson as SiteData;
}

/**
 * Get all projects from site data
 * @returns Array of Project objects
 */
export function getProjects(): Project[] {
  const siteData = getSiteData();
  return siteData.projects;
}

/**
 * Get a specific project by slug
 * @param slug - The project slug to find
 * @returns Project object or undefined if not found
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find(project => project.slug === slug);
}

/**
 * Get featured projects (first N projects)
 * @param count - Number of featured projects to return (default: 3)
 * @returns Array of featured Project objects
 */
export function getFeaturedProjects(count: number = 3): Project[] {
  const projects = getProjects();
  return projects.slice(0, count);
}

/**
 * Get all unique technology stack items across projects
 * @returns Array of unique technology strings
 */
export function getAllTechnologies(): string[] {
  const projects = getProjects();
  const allTech = projects.flatMap(project => project.stack);
  return [...new Set(allTech)].sort();
}

/**
 * Filter projects by technology stack
 * @param technology - Technology to filter by
 * @returns Array of Project objects that use the specified technology
 */
export function getProjectsByTechnology(technology: string): Project[] {
  const projects = getProjects();
  return projects.filter(project => 
    project.stack.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}

/**
 * Get navigation items
 * @returns Array of NavItem objects
 */
export function getNavigation(): NavItem[] {
  const siteData = getSiteData();
  return siteData.nav;
}

/**
 * Get highlights/metrics for home page
 * @returns Array of Highlight objects
 */
export function getHighlights(): Highlight[] {
  const siteData = getSiteData();
  return siteData.highlights;
}

/**
 * Get brand information
 * @returns Brand object with personal/company info
 */
export function getBrandInfo() {
  const siteData = getSiteData();
  return siteData.brand;
}

/**
 * Get hero section content
 * @returns Hero object with headline, subtitle, and CTAs
 */
export function getHeroContent() {
  const siteData = getSiteData();
  return siteData.hero;
}

/**
 * Get meta information for SEO
 * @returns Meta object with title, description, keywords, etc.
 */
export function getMetaInfo() {
  const siteData = getSiteData();
  return siteData.meta;
}

/**
 * Get footer content
 * @returns Footer string
 */
export function getFooterContent(): string {
  const siteData = getSiteData();
  return siteData.footer;
}

/**
 * Validate that required site data is present
 * @returns boolean indicating if site data is valid
 */
export function validateSiteData(): boolean {
  try {
    const siteData = getSiteData();
    
    // Check required fields
    const requiredFields = [
      siteData.brand?.name,
      siteData.brand?.title,
      siteData.brand?.email,
      siteData.nav?.length,
      siteData.meta?.title,
      siteData.hero?.headline,
      siteData.projects?.length
    ];

    return requiredFields.every(field => field !== undefined && field !== null);
  } catch (error) {
    console.error('Error validating site data:', error);
    return false;
  }
}

/**
 * Get professional certifications
 * @returns Array of Certification objects
 */
export function getCertifications(): Certification[] {
  const siteData = getSiteData();
  return siteData.certifications;
}

/**
 * Get recent certifications (most recent first)
 * @param count - Number of recent certifications to return (default: 3)
 * @returns Array of recent Certification objects
 */
export function getRecentCertifications(count: number = 3): Certification[] {
  const certifications = getCertifications();
  return certifications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAboutData() {
  const siteData = getSiteData();
  return siteData.about;
}

export function getContactData() {
  const siteData = getSiteData();
  return siteData.contact;
}

/**
 * Get the current page title for a given path
 * @param path - Current page path (e.g., '/work', '/about')
 * @returns Formatted page title
 */
export function getPageTitle(path: string): string {
  const metaInfo = getMetaInfo();
  const brandInfo = getBrandInfo();
  
  const pageMap: Record<string, string> = {
    '/': metaInfo.title,
    '/work': `Work - ${brandInfo.name}`,
    '/projects': `Projects - ${brandInfo.name}`,
    '/about': `About - ${brandInfo.name}`,
    '/contact': `Contact - ${brandInfo.name}`,
    '/resume': `Resume - ${brandInfo.name}`
  };

  return pageMap[path] || metaInfo.title;
}