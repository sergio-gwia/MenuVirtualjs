let pedidoCantidad = document.querySelector("#pedidoCantidad")

let divSubtotal = document.querySelector("#subtotal")

let divtotal = document.querySelector("#total")

let pedido = JSON.parse(localStorage.getItem("pedido"))

let btnFinalizar = document.querySelector("#finalizar")

let tipos = []

let precios = []

let divMuzzarella = document.createElement("div")
let divFugazza = document.createElement("div")
let divCantimpalo = document.createElement("div")
let divNapolitana = document.createElement("div")
let divMorron = document.createElement("div")
let divAnana = document.createElement("div")
let divRoquefort = document.createElement("div")
let divJamon = document.createElement("div")
let divHuevo = document.createElement("div")
let divAnchoas = document.createElement("div")

for (const i of pedido) {
    tipos.push(i.tipo)
    precios.push(i.precio)
}

for (const i of tipos) {
    switch (i) {
        case "Muzzarella":
        divMuzzarella.innerText = `${tipos.filter(element => element == "Muzzarella").length} x ${i}`
        pedidoCantidad.append(divMuzzarella)    
            break;
        case "Fugazza":
        divFugazza.innerText = `${tipos.filter(element => element == "Fugazza").length} x ${i}`
        pedidoCantidad.append(divFugazza)    
            break;
        case "Cantimpalo":
        divCantimpalo.innerText = `${tipos.filter(element => element == "Cantimpalo").length} x ${i}`
        pedidoCantidad.append(divCantimpalo)    
            break;
        case "Napolitana":
        divNapolitana.innerText = `${tipos.filter(element => element == "Napolitana").length} x ${i}`
        pedidoCantidad.append(divNapolitana)    
            break;
        case "Morron":
        divMorron.innerText = `${tipos.filter(element => element == "Morron").length} x ${i}`
        pedidoCantidad.append(divMorron)    
            break;
        case "Anana":
        divAnana.innerText = `${tipos.filter(element => element == "Anana").length} x ${i}`
        pedidoCantidad.append(divAnana)    
            break;
        case "Roquefort":
        divRoquefort.innerText = `${tipos.filter(element => element == "Roquefort").length} x ${i}`
        pedidoCantidad.append(divRoquefort)    
            break;   
        case "Jamon":
        divJamon.innerText = `${tipos.filter(element => element == "Jamon").length} x ${i}`
        pedidoCantidad.append(divJamon)    
            break;
        case "Huevo":
        divHuevo.innerText = `${tipos.filter(element => element == "Huevo").length} x ${i}`
        pedidoCantidad.append(divHuevo)    
            break; 
        case "Anchoas":
        divAnchoas.innerText = `${tipos.filter(element => element == "Anchoas").length} x ${i}`
        pedidoCantidad.append(divAnchoas)    
            break;            
        default:
            break;
    }
}

let eliminarPedido = document.createElement("button")
eliminarPedido.innerText = "Eliminar Pedido"
eliminarPedido.classList.add("btn")
eliminarPedido.classList.add("btn-success")
pedidoCantidad.appendChild(eliminarPedido)

eliminarPedido.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.href = `/index.html`
})

let subtotal = precios.reduce((a, b) => a + b, 0);

divSubtotal.innerText = `$ ${subtotal}`

let total = subtotal - (subtotal * 0.15)

divtotal.innerText= `$${total}`

let nombreCliente = document.querySelector("#nombre-cliente")

btnFinalizar.addEventListener("click", (e)=>{
    e.preventDefault()
    Swal.fire({
        title: `Gracias ${nombreCliente.value}! Tu pedido esta confirmado!`,
        text: `Llegara a tu domicilio en aproximadamente ${Math.floor(Math.random() * 40)} minutos!`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = `../index.html`
        }
      })
    localStorage.clear()  
})

