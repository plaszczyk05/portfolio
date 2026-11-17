function showSection(id) {
  const sections = document.querySelectorAll('.about-me, .education, .skills, .projects');
  const buttons = document.querySelectorAll('[class^="acontent"]');

  sections.forEach(section => {
    if (section.id === id) {
      if (section.classList.contains('visible')) {
        section.classList.remove('visible');
      } else {
        sections.forEach(s => s.classList.remove('visible'));
        section.classList.add('visible');
      }
    } else {
      section.classList.remove('visible');
    }
  });

  const anyVisible = Array.from(sections).some(sec => sec.classList.contains('visible'));

  buttons.forEach(button => {
    button.style.pointerEvents = anyVisible ? 'none' : 'auto';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.about-me, .education, .skills, .projects');
  const buttons = document.querySelectorAll('[class^="acontent"]');

  sections.forEach(section => {
    section.addEventListener('click', () => {
      section.classList.remove('visible');

      buttons.forEach(button => {
        button.style.pointerEvents = 'auto';
      });
    });
  });
});