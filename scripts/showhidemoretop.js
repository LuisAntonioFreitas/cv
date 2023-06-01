const topBackground = document.getElementById("top");
const article = document.querySelector("#text-main");
const articleButton = document.querySelector("#read-text-main");

articleButton.addEventListener("click", readMore);

function readMore() {
  if (article.className == "open") {
    topBackground.className = "top top-height";
    article.className = "";
    articleButton.innerHTML = "<span>mostrar mais</span><i class='fa-solid fa-chevron-up'></i>"; 
    articleButton.title = "mostrar mais";
  } else {
    topBackground.className = "top";
    article.className = "open";
    articleButton.innerHTML = "<span>mostrar menos</span><i class='fa-solid fa-chevron-down'></i>"; 
    articleButton.title = "mostrar menos";
  };
};