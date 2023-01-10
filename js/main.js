
class Producto {
    constructor(tipo, cantidad, ingrediente, precio, stock) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.ingrediente = ingrediente;
        this.precio = precio;
        this.stock = stock;
        this.descontar = () => {
            this.stock = this.stock - 1;
        };
    }
} 


let botonMuzzarella = document.getElementById("botonMuzzarella")
let botonFuggazza = document.getElementById("botonFuggazza")
let botonCantimpalo = document.getElementById("botonCantimpalo")
let botonNapo = document.getElementById("botonNapo")
let botonMorron = document.getElementById("botonMorron")

let numero = 0

function guardarEnStorage(elemento){
    return localStorage.setItem("pizzas", JSON.stringify(elemento))
}

botonMuzzarella.addEventListener("click", ()=> {
    localStorage.setItem("numero", numero++)
})

