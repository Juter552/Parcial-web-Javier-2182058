
    
$(document).ready(function(){
    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var nombre = urlparametros.get("nombre");
    var correo = urlparametros.get("correo");
    var telefono =urlparametros.get("telefono");
    var porcentaje =urlparametros.get("porc");
    var gustos=urlparametros.get("gusto");
    $("#nombre").html(nombre);
    $("#correo").html(correo);
    $("#telefono").html(telefono);
    $("#porc").html(porcentaje);
    $("#gusto").html(gustos);
});