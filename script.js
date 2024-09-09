window.onload = function() {
    setupStudioSlider();
    setupButton();
    setupHamburgerMenu();
};

function setupStudioSlider() {
    $('.studio-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });
};

function setupButton() {
    $('.start-button').on('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Ocultar la sección fullscreen
        $('#intro-fullscreen').fadeOut('slow', function() {
            $('#main-container').removeClass('container-expanded');
            $('#main-container').addClass('container');
            $(".intro").show()
            $(".studio-section").show()
            $(".contact-buttons-section").show()
            $(".info-section").show()
            $(".map-section").show()
            $(".thanks-section").show()
        });
    });
}

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('visible');
        });
    }
}