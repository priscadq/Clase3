var Alumno= function (nombre, apellido, dni) {
    var _nombre = nombre;
    var _apellido = apellido;
    var _dni = dni;
    

    
    var getEdad = function () {
        if (_edad==undefined) {
            var _edad = new Date().getFullYear() -  _fechaNacimiento.getFullYear();
        } return _edad;
    }

    
    var getProximoCumpleanio = function () {
        var getAnioActual = new Date().getFullYear();
        var getMesActual = new Date().getMonth();
        var getDiaActual = new Date().getDay();

        var getAnioNacimiento = _fechaNacimiento.getFullYear();
        var getMesNacimiento = _fechaNacimiento.getMonth();
        var getDiaNacimiento = _fechaNacimiento.getDay();

        if (getMesNacimiento < getMesActual) {
            var anio = getAnioActual + 1;
        }
        else if (getDiaActual >= getDiaNacimiento) {
            var anio = getAnioActual;
        }
        else {
            var anio = getAnioActual +1;
        }
       
        document.getElementById("result").innerHTML = getDiaNacimiento + "/" + getMesNacimiento + "/" + getAnioNacimiento;
    }

    var getfechaNacimiento = function () {
        //_fechaNacimiento=prompt("Ingresar fecha de Nacimiento");
        return _fechaNacimiento;

    }

    
    var setfechaNacimiento = function (_fechaNac) {
        _fechaNacimiento = new Date(_fechaNac);
    
    }
    

    
    return {
        nombre: _nombre,
        apellido: _apellido,
        dni: _dni,
        //fechaNacimiento: _fechaNacimiento,
        getEdad: getEdad,
        getProximoCumpleanio: getProximoCumpleanio,
        getfechaNacimiento: getfechaNacimiento,
        setfechaNacimiento: setfechaNacimiento


    }

}



//para instancias y probar el objeto
var alumno;
function iniciar() {
    alumno= new Alumno("Prisca", 21212, "Diaz");
}