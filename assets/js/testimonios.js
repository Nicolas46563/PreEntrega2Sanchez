document.addEventListener('DOMContentLoaded', function () {
    const testimonios = document.querySelectorAll('.testimonial');

    testimonios.forEach(testimonio => {
        // Efecto de sombra al pasar el ratón sobre el testimonio
        testimonio.addEventListener('mouseenter', () => {
            testimonio.classList.add('shadow-lg');
            testimonio.style.transform = 'scale(1.05)';
            testimonio.style.transition = 'transform 0.3s ease';
        });

        testimonio.addEventListener('mouseleave', () => {
            testimonio.classList.remove('shadow-lg');
            testimonio.style.transform = 'scale(1)';
        });

        // Mostrar más información al hacer clic en el testimonio
        testimonio.addEventListener('click', () => {
            const testimonialText = testimonio.querySelector('p');
            testimonialText.classList.toggle('show-more');
        });
    });
});
