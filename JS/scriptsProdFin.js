
    var nombre, apellido, nrdocumento, tpdocumento, telefono, email;
    var productos = ["Tj Visa", "Tj MasterCard", "Caja de Ahorro", "Caja Corriente"];


var Cliente = function (_nombre, _apellido, _nroDocumento, _tpDocumento, _telefono, _email) {
    this.NroDocumento = _nroDocumento;
    this.TpDocumento = _tpDocumento;
    this.Telefono = _telefono;
    this.Email = _email;
    this.Nombre = _nombre;
    this.Apellido = _apellido;
    
}


function mostrar(c) {
    
     document.getElementById("lblNombre").innerHTML = c.Nombre; 
     document.getElementById("lblApellido").innerHTML = c.Apellido; 
     document.getElementById("lblTipDoc").innerHTML = c.TpDocumento; 
     document.getElementById("lblNroDocumento").innerHTML = c.NroDocumento; 
     document.getElementById("lblTelefono").innerHTML = c.Telefono; 
     document.getElementById("lblEmail").innerHTML = c.Email; 
 }


function crearCliente() {
                        //      0               1               2       3               4       5           6               7               8
    var clienteString= "Kendry Alejandro, Martin Urdaneta, 19810424, kendry@gmail.com, CUIL, 209987863, Tarjeta credito, Tarjeta Debido, Prestamos Hipotecario";
    var vector = clienteString.split(",");
    
    
    
    var nuevoCliente = new Cliente(vector[0], vector[1], vector[5], vector[4], vector[2], vector[3]);
    mostrar(nuevoCliente);
    
}