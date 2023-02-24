var auto = {
    marca: "Toyota",
    modelo: "Txl",
    annio: "2020",
    detalle: function(){
        console.log(`Auto ${this.modelo} es del año ${this.annio}`);
    }
};

auto.marca;
auto.detalle();