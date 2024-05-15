document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Enviar los datos al servidor Node.js
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            email,
            mensaje
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Imprimir la respuesta del servidor en la consola
        this.reset(); // Limpiar el formulario
        document.getElementById('success-message').style.display = 'block'; // Mostrar el mensaje de éxito
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

