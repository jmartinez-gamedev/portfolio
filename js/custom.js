document.addEventListener('DOMContentLoaded', function () {
    // Select the video element
    const backgroundVideo = document.querySelector('.scrollblur');

    // Listen for the scroll event
    window.addEventListener('scroll', () => {
        // Check the scroll position
        if (window.scrollY > 50) { // You can adjust this value to trigger at a specific scroll position
            backgroundVideo.classList.add('blur');
        } else {
            backgroundVideo.classList.remove('blur');
        }
    });
});