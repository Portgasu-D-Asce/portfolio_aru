document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.body;
    background.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; // Parallax effect
});

const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease-in-out';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});