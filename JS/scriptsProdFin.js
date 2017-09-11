
    var nombre, apellido, nrdocumento, tpdocumento, telefono, email;
    

// OBJETO cliente, define las propieades que un cliente tiene que tener. Aka: nombre, appellido, nrodoc, tipdoc, tel, y mail
var Cliente = function (_nombre, _apellido, _nroDocumento, _tpDocumento, _telefono, _email) {
    this.NroDocumento = _nroDocumento;
    this.TpDocumento = _tpDocumento;
    this.Telefono = _telefono;
    this.Email = _email;
    this.Nombre = _nombre;
    this.Apellido = _apellido;
    
}

//FUNCION para imprimir los datos en la tabla del html
function mostrar(c) {
    
     document.getElementById("lblNombre").innerHTML = c.Nombre; 
     document.getElementById("lblApellido").innerHTML = c.Apellido; 
     document.getElementById("lblTipDoc").innerHTML = c.TpDocumento; 
     document.getElementById("lblNroDocumento").innerHTML = c.NroDocumento; 
     document.getElementById("lblTelefono").innerHTML = c.Telefono; 
     document.getElementById("lblEmail").innerHTML = c.Email; 
 }

//FUNCION para imprimir los datos de productos en tabla (crea la tabla en si mismo)
function showProductos(productos){
    // var prods = getProductosPorFila();
     var getProductosPorFila = function() {
         var columnas = "";
         for (var i = 0; i < productos.length; i++ ) {
             columnas = columnas + "<td>" + productos[i] + "</td>";
         }
         filas= "<tr>" + columnas + "</tr>";
         return filas;
 
     }
 
     document.getElementById("tblProductos").innerHTML = getProductosPorFila();
 
 }

//FUNCION para crear efectivamente un Cliente, en base a una variable string con la data necesaria
function crearCliente() {
    //para crear "UN CLIENTE"
                        //      0               1               2       3               4       5           6               7               8
    var clienteString= "Kendry Alejandro, Martin Urdaneta, 19810424, kendry@gmail.com, CUIL, 209987863, Tarjeta credito, Tarjeta Debido, Prestamos Hipotecario";
    var vector = clienteString.split(","); //crea un vector "vector" en base al string, separando posicion por coma
    var nuevoCliente = new Cliente(vector[0], vector[1], vector[5], vector[4], vector[2], vector[3]); //nuevoCliente es el vector, y usa la clase "Cliente" para deifnir las propiedades de este. 
 
    mostrar(nuevoCliente); //se llama a la funcion "mostrar", para que imprima el objeto nuevoCliente
    

    //para crear los "PRODUCTOS" 
    //se define el vector productos, y se define una variable auxiliar para correr el For. "j" va a ser el numero de posicion del vector "productos", ya que no se puede usar "i" porque "i" va a estar contando la posicion del vector "vector"
    var productos = [];
    var j = 0;

    for (var i = 0; i < vector.length; i++) {     //For para copiar los datos del vector "vector" a partir de la posicion 6 y copiarlos en el vector "productos"
        if (i >= 6) {
            productos[j] = vector[i];
            j++

        }
    }
    showProductos(productos); //se llama a la funcion "showProductos" para que imprimir el vector productos


    //crear array "PRODUCTOSDELCLIENTE"
    //el array tendra al vector Clientes y el vector Productos
  
    var productosDelCliente = new Array();
    productosDelCliente[0] = nuevoCliente;
    productosDelCliente[0][1] = productos;


}



// tengo que testear esto luego
function crearMatriz() {
    // mi variable "registros" va a tener 3 filas
    var registros = new Arrway(3); registros = (3) [Array(2),Array(2),Array(2)]
    registros[0] = new Array("Nombre","Appelido");
    registros[1] = new Array("Alejandra","Castro");
    registros[2] = new Arrway("Jorge","Paris");


}




/*
function ejemplo2() {

    var nroFilas = +prompt("Numero de Clientes");
    nroFilas++; 
    var nroColumnas = +prompt("Numero de COlumnas");

    var registros = new Array(nroFilas);

    for (var i = ; 0 < nroFilas; i++) {
        if (i ==0)
            alert ("va a ingresar los nombres de los campos");
        else
            alert ("ingresar los fatos de un nuevo CLiente");
        var cliente = [];

        for (var j = 0; j < nroColumnas; j++) {
            if (i== 0)
                cliente[j] = prompt("Ingrese nombre del campo");
            else 
                cliente[j] = prompt("ingrese el valor de **" + registros[0][j] + "**")
        }
        registros[i] = cliente;
    }
    for (i = 0; i > registros.length; I++) {
        for (j == 0; j < 
    }
}
*/
