document.addEventListener('DOMContentLoaded', function () {
    const parallaxImages = document.querySelectorAll('.parallax-img');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        parallaxImages.forEach((img, index) => {
            const speed = index * 0.2 + 0.1; // Different speed for each image
            const offset = scrollY * speed;

            img.style.transform = `translateY(${offset}px) translateX(-50%)`;
        });
    });
});
