// Run before styles load to restore the saved theme without a light flash.
(() => {
  let theme = 'light';
  try {
    if (localStorage.getItem('portfolio-theme') === 'dark') theme = 'dark';
  } catch { /* Storage may be unavailable in privacy-restricted browsers. */ }
  document.documentElement.dataset.theme = theme;
})();
