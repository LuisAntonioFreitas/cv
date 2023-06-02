// function handleToggleDarkMode() {
//   var darkMode;
//   if (document.getElementById('buttonToggleDarkMode').title === "Modo Dark") {
//     darkMode = true;
//   } else { darkMode = false; }

//   if (darkMode) {
//     document.getElementById('buttonToggleDarkMode').innerHTML = "<i class='fa-solid fa-sun'></i>"
//     document.getElementById('buttonToggleDarkMode').title = "Modo Light"
//   } else {
//     document.getElementById('buttonToggleDarkMode').innerHTML = "<i class='fa-solid fa-moon'></i>"
//     document.getElementById('buttonToggleDarkMode').title = "Modo Dark"
//   }

//   var element = document.body;
//   element.classList.toggle("dark-mode");
// };

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('cv-theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('cv-theme', 'light'); //add this
  }    
}

const currentTheme = localStorage.getItem('cv-theme') ? localStorage.getItem('cv-theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}