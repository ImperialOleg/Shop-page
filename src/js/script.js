const themeToggle = document.querySelector('.theme-toggle');

const LIGHT_THEME_CLASS = 'theme--light';
const DARK_THEME_CLASS = 'theme--dark';
document.body.classList.add(LIGHT_THEME_CLASS);

themeToggle.addEventListener('click', function () {
  const isLight = document.body.classList.contains(LIGHT_THEME_CLASS);
  const targetTheme = isLight ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;
  const themeToRemove = isLight ? LIGHT_THEME_CLASS : DARK_THEME_CLASS;

  document.body.classList.remove(themeToRemove);
  document.body.classList.add(targetTheme);
});
