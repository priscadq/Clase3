var Alumno= function () {
    var _nombre = "";
    var _apellido = "";
    var _dni = "";
    var _FechaNacimiento = "";

    
    var getEdad = function () {
        if (_edad==undefined) {
            var edad = new Date().getFullYear() -  _FechaNacimiento.getFullYear();
        } return _edad;
    }

    //calculo del proximo cumpleaños
    var getProximoCumpleanio = function () {
        var getAnioActual = new Date.getFullYear();
        var getMesActual = new Date.getMonth();
        var getDiaActual = new Date.getDay();

        var getAnioNacimiento = _FechaNacimiento.getFullYear();
        var getMesNacimiento = _FechaNacimiento.getMonth();
        var getDiaNacimiento = _FechaNacimiento.getDay();

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



    
    var getFechaNacimiento = function () {
        _FechaNacimiento=prompt("Ingresar fecha de Nacimiento");

        return _FechaNacimiento;

    }
    var setFechaNacimiento = function (_fechaNac) {
        _FechaNacimiento = new Date(_fechaNac);
    }

    
    return {
        nombre: _nombre,
        apellido: _apellido,
        dni: _dni,
        fechaNacimiento: _FechaNacimiento,
        getEdad: getEadad,
        getProximoCumpleanio: getProximoCumpleanio,
        getFechaNacimiento: getFechaNacimiento


    }

}



//para instancias y probar el objeto
var alumno;
function iniciar() {
    alumno= new Alumno();
}