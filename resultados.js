window.addEventListener('DOMContentLoaded', function(){

    //Obtner los parametros de la URL enviados por el Form
    const urlParams = new URLSearchParams(this.window.location.search)

    // Extraer los parametros de la URL
    const nombre = urlParams.get('nombre');
    const cedula = urlParams.get('cedula');
    const email = urlParams.get('email');
    const telefono = urlParams.get('telefono');
    const tipoExamen = urlParams.get('tipoExamen');
    const fechaExamen = urlParams.get('fechaExamen');

    //Verificar si existen datos
    if (nombre && cedula){
        // Obtener los elementos del DOM donde se mostraran los datos
        const elementoNombre = this.document.getElementById('mostrarNombre');
        const elementoCedula = this.document.getElementById('mostrarCedula');
        const elementoEmail = this.document.getElementById('mostrarEmail');
        const elementoTelefono = this.document.getElementById('mostrarTelefono');
        const elementoTipoExamen = this.document.getElementById('mostrarTipoExamen');
        const elementoFechaExamen = this.document.getElementById('mostrarFechaExamen');

        elementoNombre.textContent = decodeURIComponent(nombre);
        elementoCedula.textContent = decodeURIComponent(cedula);
        elementoEmail.textContent = decodeURIComponent(email);
        elementoTelefono.textContent = decodeURIComponent(telefono);
        elementoTipoExamen.textContent = decodeURIComponent(tipoExamen);
        elementoFechaExamen.textContent = decodeURIComponent(fechaExamen);
    }else{
        //this.alert("No se encontraron datos...");
        this.document.getElementById("status").innerText = "Error envio de datos";

    }
});



function volverAlFormulario(){
    // Redirigir al formulario principal
    window.location.href = "index.html"
}