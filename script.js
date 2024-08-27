// JavaScript to handle the dropdown menu functionality
document.getElementById('hamburger').onclick = function() {
    document.getElementById('dropdown').style.display = 'block';
};

document.getElementById('close').onclick = function() {
    document.getElementById('dropdown').style.display = 'none';
};
// left right button in featured courses
const scrollContainer = document.querySelector('.courses-container');
const scrollRightButton = document.querySelector('.scroll-right');
const scrollLeftButton = document.querySelector('.scroll-left');
let scrollAmount = 0;
const scrollStep = 300; // Adjust this value to control scroll amount

// Clone the course cards and append them to create the infinite scroll effect
const courses = document.querySelectorAll('.course-card');
courses.forEach(course => {
    const clone = course.cloneNode(true);
    scrollContainer.appendChild(clone);
});

scrollRightButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    scrollContainer.style.transition = 'transform 0.3s ease-in-out';
    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollContainer.style.transition = 'none';
        scrollAmount = 0;
        scrollContainer.style.transform = 'translateX(0)';
    }
});

scrollLeftButton.addEventListener('click', () => {
    if (scrollAmount === 0) {
        scrollAmount = scrollContainer.scrollWidth / 2;
        scrollContainer.style.transition = 'none';
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }

    scrollAmount -= scrollStep;
    scrollContainer.style.transition = 'transform 0.3s ease-in-out';
    scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
});
