/**
 * Prefix a path with the runtime base URL so links work locally and on GitHub Pages.
 * - Leaves absolute URLs (http/https/mailto) unchanged
 * - Normalizes leading slashes
 */
export function withBase(path: string | undefined | null): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path) return base;
  const lower = String(path).toLowerCase();
  if (lower.startsWith('http://') || lower.startsWith('https://') || lower.startsWith('mailto:')) {
    return String(path);
  }
  const trimmed = String(path).startsWith('/') ? String(path).slice(1) : String(path);
  return base.endsWith('/') ? `${base}${trimmed}` : `${base}/${trimmed}`;
}

/**
 * Determines if the given href should be considered active for the current pathname.
 */
export function isActivePath(currentPathname: string, href: string): boolean {
  const target = withBase(href).replace(/\/+$/, '/');
  const current = (currentPathname || '/').replace(/\/+$/, '/');
  if (target === withBase('/')) return current === withBase('/');
  return current.startsWith(target);
}

