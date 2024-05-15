document.addEventListener('DOMContentLoaded', function () {
    fetch('/assets/json/about.json')
        .then(response => response.json())
        .then(data => {
            const equipoContainer = document.querySelector('#equipo .row');
            data.forEach(miembro => {
                const miembroDiv = document.createElement('div');
                miembroDiv.classList.add('col-md-3', 'mb-4');
                miembroDiv.innerHTML = `
                    <div class="card h-100">
                        <img src="${miembro.imagen}" class="card-img-top miniatura" alt="Imagen de ${miembro.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${miembro.nombre}</h5>
                            <p class="card-text">${miembro.puesto}</p>
                            <p class="card-text">${miembro.descripcion}</p>
                        </div>
                    </div>
                `;
                equipoContainer.appendChild(miembroDiv);
                
                const imgElement = miembroDiv.querySelector('img');
                imgElement.addEventListener('click', () => {
                    const modal = document.getElementById('modal');
                    const modalImg = modal.querySelector('.modal-body img');
                    modalImg.src = imgElement.src;
                    $(modal).modal('show');
                });
            });
        });

    const introTexts = document.querySelectorAll('.intro-text');
    introTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in');
        }, index * 500);
    });
});
