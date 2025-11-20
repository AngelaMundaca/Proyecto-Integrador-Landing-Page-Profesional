const form = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();

    if (nombre === "" || email === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    modalExito.show();

    form.reset();
});