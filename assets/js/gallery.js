document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-section img');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.add('zoomed');
        });

        image.addEventListener('mouseleave', () => {
            image.classList.remove('zoomed');
        });

        image.addEventListener('click', () => {
            const selectedImage = image.getAttribute('src');
            const modalImage = document.querySelector('.modal-body img');
            modalImage.setAttribute('src', selectedImage);
            const modal = document.querySelector('.modal');
            modal.classList.add('show');
        });
    });

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('show');
    };

    const closeButton = document.querySelector('.modal .close');
    const closeButtonMobile = document.querySelector('.modal-footer button');
    
    closeButton.addEventListener('click', closeModal);
    closeButtonMobile.addEventListener('click', closeModal);
});
