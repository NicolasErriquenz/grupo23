document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
        $("#texto_error").html("No has escrito tu usuario");
            $("#lb").lightbox_me({
                centered: true,
            });
        return;
    }
    var clave = document.getElementById('clave').value;
    if(clave.length <6) {
        $("#texto_error").html("La clave ingresada no es valida");
            $("#lb").lightbox_me({
                centered: true,
            });
        return;
    }
    if(usuario.length >0 & clave.length >6 ) {
        $("#texto_error").html("Formulario enviado");
            $("#lb").lightbox_me({
                centered: true,
            });
        return;
    }
    this.submit()
}