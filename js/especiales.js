class Producto {
    constructor(tipo, ingrediente, stock) {
        this.tipo = tipo;
        this.ingrediente = ingrediente;
        this.stock = stock;
        this.descontar = () => {
            this.stock = this.stock - 1;
        };
    }
} 


let botonAnana = document.getElementById("botonAnana")
let botonRoquefort = document.getElementById("botonRoquefort")
let botonJamon = document.getElementById("botonJamon")
let botonHuevo = document.getElementById("botonHuevo")
let botonAnchoas = document.getElementById("botonAnchoas")

let pedido = JSON.parse(localStorage.getItem("pedido"))

botonAnana.addEventListener("click", ()=> {
    let anana = new Producto("Anana", "Salsa de tomate, Muzzarella, aceitunas y Anana", 120);
    pedido.push(anana)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonRoquefort.addEventListener("click", ()=>{
    let roquefort = new Producto("Roquefort","Muzzarella, Tomate, Queso Roquefort, Aceitunas", 105);
    pedido.push(roquefort)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonJamon.addEventListener("click", ()=>{
    let jamon = new Producto("Jamon","Muzzarella, Tomate, Jamon Crudo, Albaca", 105);
    pedido.push(jamon)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonHuevo.addEventListener("click", ()=>{
    let huevo = new Producto("Huevo","Muzzarella, Tomate, Jamon, Huevo", 203);
    pedido.push(huevo)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonAnchoas.addEventListener("click", ()=>{
    const anchoas = new Producto("Anchoas", "Muzzarella, Tomate, Anchos, Aceitunas", 146);
    pedido.push(anchoas)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

