var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

//IGNACIO// 1)FUNCION A REVISAR - ELIMINA EL HORARIO STRING DEL ARRAY DE HORARIOS - Modificada. cambie el splice por el filter
Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(function(horario){
        return (horario !== horarioReservado);
    });
    //CODIGO ORIGINAL CON SPLICE
     // for (var i = 0; i < this.horarios.length; i++) {
        // if (this.horarios[i] === horarioReservado) {
            // this.horarios.splice(i, 1); //Ignacio// Borra 1 elemento a partir de la posisicion i
            // return;
        // }
    // }
}


//IGNACIO// 2)FUNCION A REVISAR - AGREGA UNA NUEVA CALIFIACION AL ARRAY DE CALIFICANCIONES
Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

//IGNACIO// 3)FUNCION A REVISAR - PROMEDIA LAS CALIFICACIONES
Restaurant.prototype.obtenerPuntuacion = function() {
    return promedioArreglo(this.calificaciones);
    // FUNCION PROMEDIO ORIGINAL
    // if (this.calificaciones.length === 0) {
    //     return 0;
    // } else {
    //     var sumatoria = 0;
    //     for (var i = 0; i < this.calificaciones.length; i++) {
    //         sumatoria += this.calificaciones[i]
    //     }
    //     var promedio = sumatoria / this.calificaciones.length;
    //     return Math.round(promedio * 10) / 10;
    // }

}

//IGNACIO // MODULIZACION DE FUNCION SUMAR 
function sumaArreglo(arreglo){
    var sumatoriaArreglo =0;
    arreglo.forEach(function(numero){
        sumatoriaArreglo=sumatoriaArreglo+numero;
    })
    return sumatoriaArreglo;
}


//IGNACIO // MODULIZACION DE FUNCION PROMEDIO
function promedioArreglo(arreglo){
    var promedio = sumaArreglo(arreglo)/arreglo.length;
    return promedio;
}
