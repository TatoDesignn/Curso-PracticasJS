

var articulos = [
    {nombre: "Pc", precio: 5000},
    {nombre: "Play5", precio: 350},
    {nombre: "Xbox", precio: 200},
];



var filtrar = articulos.filter(function(articulo){
    return articulo.precio > 550;   //filtra una busqueda 
});

var mapeo = articulos.map(function(articulo){
    return articulo.nombre;  //regresa mi articulo con todo los articulos en lista
});

var encuentra = articulos.find(function(articulo){
    return articulo.nombre === "Play5";     //Busca uno en especifico y imprime todo mi objeto
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);  //recorre toda la lista y me imprime uno por uno 
});

var VyF = articulos.some(function(articulo){
    return articulo.precio < 400;  // returna un verdadero o falso 
});