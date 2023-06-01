// const section = document.querySelector(".section-text-main");
// const sectionButton = document.querySelector(".button-text-main");

// sectionButton.addEventListener("click", readMore);

// function readMore() {
//   if (section.className == "section-text-main-open") {
//     section.className = "section-text-main";
//     sectionButton.className = "button-text-main";
//     sectionButton.innerHTML = "<span class='mostrar-mais'>mostrar mais</span><i class='mostrar-mais fa-solid fa-chevron-up'></i>"; 
//     sectionButton.title = "mostrar mais";
//   } else {
//     section.className = "section-text-main-open";
//     sectionButton.className = "button-text-main button-text-main-open";
//     sectionButton.innerHTML = "<span class='mostrar-mais'>mostrar menos</span><i class='mostrar-mais fa-solid fa-chevron-down'></i>"; 
//     sectionButton.title = "mostrar menos";
//   };
// };

const buttonsMore = document.querySelectorAll('.button-text-main');

buttonsMore.forEach((button) => {
  button.addEventListener('click', (e) => {
    const section = button.parentElement;
    const sectionMore = section.querySelector(".section-text-main");

    if (section.className == "section-text-main-open") {
      section.className = "section-text-main";
      button.className = "button-text-main";
      button.innerHTML = "<span class='mostrar-mais'>mostrar mais</span><i class='mostrar-mais fa-solid fa-chevron-up'></i>"; 
      button.title = "mostrar mais";
    } else {
      section.className = "section-text-main-open";
      button.className = "button-text-main button-text-main-open";
      button.innerHTML = "<span class='mostrar-mais'>mostrar menos</span><i class='mostrar-mais fa-solid fa-chevron-down'></i>"; 
      button.title = "mostrar menos";
    };

  });
});
