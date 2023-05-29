function showHideDiv(div) {
  var element = document.getElementById(div);
  var arrow = document.getElementById(`${div}-arrow`);

  if(element.style.display=="none") {
      element.style.display = "block";
      arrow.className = "fa-solid fa-chevron-down";
  } else {
      element.style.display = "none";
      arrow.className = "fa-solid fa-chevron-up";
  }
}