
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


let botonMuzzarella = document.getElementById("botonMuzzarella")
let botonFuggazza = document.getElementById("botonFuggazza")
let botonCantimpalo = document.getElementById("botonCantimpalo")
let botonNapo = document.getElementById("botonNapo")
let botonMorron = document.getElementById("botonMorron")

let pedido = JSON.parse(localStorage.getItem("pedido"))

botonMuzzarella.addEventListener("click", ()=> {
    let muzzarella = new Producto("Muzzarella", "Salsa de tomate, Muzzarella y aceitunas", 120);
    pedido.push(muzzarella)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonFuggazza.addEventListener("click", ()=>{
    let fugazza = new Producto("Fugazza","Muzzarela, Cebolla y Oregano", 105);
    pedido.push(fugazza)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonCantimpalo.addEventListener("click", ()=>{
    let cantimpalo = new Producto("Cantimpalo","Muzzarela, tomate, cantimpalo o longaniza", 105);
    pedido.push(cantimpalo)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonNapo.addEventListener("click", ()=>{
    let napolitana = new Producto("Napolitana","Muzzarella, ajo, tomates y perejil", 203);
    pedido.push(napolitana)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

botonMorron.addEventListener("click", ()=>{
    const morron = new Producto("Morron", "Muzzarella, morron, jamon York y aceitnuas", 146);
    pedido.push(morron)
    localStorage.setItem("pedido", JSON.stringify(pedido))
})

