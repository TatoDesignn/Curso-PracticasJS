var estudiantes = ["leonardo", "fabiola", "Victor"];

var numero = 2;

var nombre = "Santiago";

function Solucion(){

    if(numero === 0){

        estudiantes.push(nombre);
        for (estudiante of estudiantes){
            console.log(`Hola ${estudiante}`);
        }
    }
    
    else{

        estudiantes.push(nombre);
        for(var i = 0; i < numero; i++){
            estudiantes.shift();
        }

        for(estudiante of estudiantes){
            console.log(`Hola ${estudiante}`);
        }
    }
}

Solucion();