function handleToggleDarkMode() {
  var darkMode;
  if (document.getElementById('buttonToggleDarkMode').title === "Modo Dark") {
    darkMode = true;
  } else { darkMode = false; }

  if (darkMode) {
    document.getElementById('buttonToggleDarkMode').innerHTML = "<i class='fa-solid fa-sun'></i>"
    document.getElementById('buttonToggleDarkMode').title = "Modo Light"
  } else {
    document.getElementById('buttonToggleDarkMode').innerHTML = "<i class='fa-solid fa-moon'></i>"
    document.getElementById('buttonToggleDarkMode').title = "Modo Dark"
  }

  var element = document.body;
  element.classList.toggle("dark-mode");
};