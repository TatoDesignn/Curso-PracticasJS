

function Analiza(dato){
    switch(dato){

        case "Computadora":
            console.log("Con mi computadora puedo programar usando javascript")
            break

        case "Celular":
            console.log("En mi celular puedo aprender usando la app de platzi.")
            break

        case "Cable":
            console.log("Hay un cable en mi bota")
            break

        default:
            console.log("Articulo no he encontrado.")
            break
    }
}

Analiza("Computadora")