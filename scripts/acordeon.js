// <section class="acordeon">
//     <button class="trigger" type="button">
//         <h2>Portfólio</h2>
//     </button>

//     <div class="content">
//         <ul class="portfolio" id="profile.portfolio">
//         </ul>
//     </div>
// </section>

const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    });
});