window.addEventListener('scroll', function () {
    var parallaxSection = document.getElementById('parallax-section');
    var parallaxText = parallaxSection.querySelector('.parallax-text');
    var scrollPosition = window.scrollY;

    // Adjust the opacity of the parallax text
    parallaxText.style.opacity = 1 - scrollPosition / (parallaxSection.offsetHeight * 0.5);

});

// Define scrollToSection function outside the scroll event listener
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth'});
}

// Get the button element
var scrollDownBtn = document.getElementById('scroll-down-btn');

// Scroll the page to the next section when the button is clicked
scrollDownBtn.addEventListener('click', function () {
    var nextSection = document.getElementById('about');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});
