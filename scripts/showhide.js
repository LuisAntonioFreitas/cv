const showhideTriggers = document.querySelectorAll('.showhide .trigger');

showhideTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const showhide = trigger.parentElement;
    const isOpen = showhide.classList.contains('open');
    const arrow = trigger.querySelector('.arrow');
    const content = showhide.querySelector('.content');

    if (isOpen) {
      showhide.classList.remove('open');
      arrow.className = "arrow fa-solid fa-chevron-up";
      content.style.display = "none";
    } else {
      showhide.classList.add('open');
      arrow.className = "arrow fa-solid fa-chevron-down";
      content.style.display = "block";
    }
  });
});