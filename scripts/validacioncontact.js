document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var clave = document.getElementById('clave').value;
    if(clave.length <6) {
        alert('La clave ingresada no es valida');
        return;
    }
    if(usuario.length >0 & clave.length >6 ) {
        alert('Formulario enviado');
        return;
    }
    this.submit()
}