function ToggleMenu(event) {
    const menu = document.getElementById('slideoutMenu');
    menu.classList.toggle('active');
    event.stopPropagation(); // Prevent the event from bubbling up
}

// Close the menu when clicking outside of it
document.addEventListener('click',function(event) {
    const menu = document.getElementById('slideoutMenu');
    const hamburger = document.querySelector('.icon');
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});