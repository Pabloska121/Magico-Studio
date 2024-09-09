window.onload = function() {
    setupStudioSlider();
    setupButton();
    setupHamburgerMenu();
};

function setupStudioSlider() {
    if ($('.studio-slider').length) {  // Solo inicializa si la sección existe
        $('.studio-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true
        });
    }
}

function setupButton() {
    $('.start-button').on('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        requestAnimationFrame(() => {
            $('#intro-fullscreen').fadeOut('slow', function() {
                $('#main-container').removeClass('container-expanded').addClass('container');
                
                $(".intro, .studio-section, .contact-buttons-section, .info-section, .map-section, .thanks-section").show();
            });
        });
    });
}

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.toggle('visible');
            }
        });
    }
}
