const themeToggle = document.querySelector('.theme-toggle');
function applyTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle?.setAttribute('aria-pressed', String(dark));
  themeToggle?.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111827' : '#ffffff');
}
applyTheme(document.documentElement.dataset.theme);
themeToggle?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('portfolio-theme', theme); } catch { /* The toggle still works without persistence. */ }
});
window.addEventListener('storage', event => {
  if (event.key === 'portfolio-theme' || event.key === null) applyTheme(event.newValue);
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { toggle?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('open'); }
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { nav?.querySelectorAll('[data-section]').forEach(a => { const active = a.dataset.section === entry.target.id; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); }); } }), {rootMargin:'-15% 0px -55% 0px'});
  document.querySelectorAll('main > section[id]').forEach(el => observer.observe(el));
}
document.querySelectorAll('img').forEach(img => img.addEventListener('error', () => { const fallback = document.createElement('p'); fallback.className = 'image-fallback'; fallback.textContent = img.alt + ' — image unavailable. View the original in the project repository.'; img.replaceWith(fallback); }));
