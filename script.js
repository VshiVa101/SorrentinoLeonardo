document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('mouseenter', () => {
        project.classList.add('hovered');
    });

    project.addEventListener('mouseleave', () => {
        project.classList.remove('hovered');
    });
});
