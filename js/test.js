var expect=chai.expect;
var restoTest = 
new Restaurant (13, "restoTest", "Hamburguesa", "Nueva York", ["17:00", "18:00", "19:30"], "img", [6, 9, 7, 6, 7, 4]);

describe ("Test de reservar un horario", function(){
  it("Se reserva horario correctamente, (horario eliminado de arreglo)", function(){
    var cantHorariosPreReserva = restoTest.horarios.length; 
    restoTest.reservarHorario("17:00");
    var cantHorariosPostReserva = restoTest.horarios.length; 
    expect(cantHorariosPostReserva).to.equal(cantHorariosPreReserva-1);
  })

  it("Cuando se reserva un hroario que el resto no posee el arreglo se mantiene igual", function(){
    var cantHorariosPreReserva = restoTest.horarios.length; 
    restoTest.reservarHorario("20:00");
    var cantHorariosPostReserva = restoTest.horarios.length; 
    expect(cantHorariosPostReserva).to.equal(cantHorariosPreReserva);
  })
  
  it("Reseva de hoarario, sin parametro ingresado en la fucncion", function(){
    var cantHorariosPreReserva = restoTest.horarios.length; 
    restoTest.reservarHorario();
    var cantHorariosPostReserva = restoTest.horarios.length; 
    expect(cantHorariosPostReserva).to.equal(cantHorariosPreReserva);
  })
}
)


describe ("Test de obtener Puntuacion", function(){
  it("Se calcula correctamente el promedio de puntuaciones", function(){
    var sumaPuntuaciones = 0;
    var cantPuntuaciones = restoTest.calificaciones.length;
    restoTest.calificaciones.forEach(function(numero){
       sumaPuntuaciones = sumaPuntuaciones + numero;
    })
    var promedio = sumaPuntuaciones / cantPuntuaciones;
    expect(restoTest.obtenerPuntuacion()).to.equal(promedio);
  })
  
  // it("Restaurant sin ninguna puntuacion tiene promedio 0", function(){
  //   var cantPuntuaciones = restoTest.calificaciones.length;
  //   restoTest.calificaciones.splice(0,cantPuntuaciones);
  //   expect(restoTest.obtenerPuntuacion()).to.equal(0);
  // })
})


describe ("Test de la funcion calificar",function(){
  it("Se ingresa una calificacion valida",function(){
    var puntuacion=0;
    var nuevaPuntuacion=restoTest.calificar(puntuacion)
      expect(nuevaPuntuacion).to.be.above(0);
    })
})



