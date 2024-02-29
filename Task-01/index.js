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

// Scroll the page to the next section and initialize Swiper when the button is clicked
scrollDownBtn.addEventListener('click', function () {
    var nextSection = document.getElementById('about');
    nextSection.scrollIntoView({ behavior: 'smooth' });


// Define the image sources for the certificates
var certificateImages = [
    "Images/Power Bi by PwC _page-0001.jpg",
    "Images/MYSQL certificate_page-0001.jpg",
    "Images/data engineering.jpg",
    "Images/Tableau.jpg"
];

// Initialize index for the current certificate image
var currentIndex = 0;

// Function to switch the certificate image
function switchCertificate() {
    // Get the image element
    var certificateImage = document.getElementById('certificate-image');

    // Set the image source to the current certificate
    certificateImage.src = certificateImages[currentIndex];

    // Increment the index for the next certificate
    currentIndex++;

    // Reset the index if it exceeds the number of certificates
    if (currentIndex >= certificateImages.length) {
        currentIndex = 0;
    }
}

// Call the switchCertificate function initially
switchCertificate();

// Set an interval to switch certificates every 5 seconds
var intervalId = setInterval(switchCertificate, 5000);




});
