document.getElementById("cedula").addEventListener("input", function(){
    //Permitir solo valores numericos
    this.value = this.value.replace(/[^0-9]/g, '');
});
document.getElementById("telefono").addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9-]/g, '');
});