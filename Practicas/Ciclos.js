var estudiantes = ["Pepito", "Salo", "Vale"];
 
function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}