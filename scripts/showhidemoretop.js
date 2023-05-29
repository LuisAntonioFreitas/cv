const topBackground = document.getElementById("top");
const article = document.querySelector("#text-main");
const button = document.querySelector("#read-text-main");

button.addEventListener("click", readMore);

function readMore() {
  if (article.className == "open") {
    topBackground.className = "top top-height";
    article.className = "";
    button.innerHTML = "<span>mostrar mais</span><i class='fa-solid fa-chevron-up'></i>"; 
  } else {
    topBackground.className = "top";
    article.className = "open";
    button.innerHTML = "<span>mostrar menos</span><i class='fa-solid fa-chevron-down'></i>"; 
  }
}