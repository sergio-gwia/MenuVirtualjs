let pedidoCantidad = document.querySelector("#pedidoCantidad")

let divSubtotal = document.querySelector("#subtotal")

let pedido = JSON.parse(localStorage.getItem("pedido"))

let subtotal = 0

let cantidadMuzzarella = 0
let precioMuzzarella = 0
let cantidadFugazza = 0
let precioFugazza = 0
let cantidadCantimpalo = 0
let precioCantimpalo = 0
let cantidadNapo = 0
let precioNapo = 0
let cantidadMorron = 0
let precioMorron = 0
let cantidadAnana = 0
let precioAnana = 0
let cantidadRoquefort = 0
let precioRoquefort = 0

for (const iterator of pedido) {
    switch (iterator.tipo) {
        case "Muzzarella":
            cantidadMuzzarella++
            precioMuzzarella = precioMuzzarella + 1200
            break;
        case "Fugazza":
            cantidadFugazza++
            precioFugazza = precioFugazza + 1800
            break;   
        case "Cantimpalo":
            cantidadCantimpalo++
            precioCantimpalo = precioCantimpalo + 1800
            break;
        case "Napolitana":
            cantidadNapo++
            precioNapo = precioNapo + 1600
            break; 
        case "Morron":
            cantidadMorron++
            precioMorron = precioMorron + 1700
            break;  
        case "Anana":
            cantidadAnana++
            precioAnana = precioAnana + 1900
            break; 
        case "Roquefort":
            cantidadRoquefort++
            precioRoquefort = precioRoquefort + 1800
            break;               
        default:
            break;
    }
}    

if (cantidadMuzzarella != 0) {
    let divMuzzarella = document.createElement("div")
    divMuzzarella.innerText = `${cantidadMuzzarella} x Muzzarella`
    pedidoCantidad.append(divMuzzarella)
}

if (cantidadFugazza != 0) {
    let divfugazza = document.createElement("div")
    divfugazza.innerText = `${cantidadFugazza} x Fugazza`
    pedidoCantidad.append(divfugazza)
}

if (cantidadCantimpalo != 0) {
    let divCantimpalo = document.createElement("div")
    divCantimpalo.innerText = `${cantidadCantimpalo} x Cantimpalo`
    pedidoCantidad.append(divCantimpalo)
}

if (cantidadNapo != 0) {
    let divNapo = document.createElement("div")
    divNapo.innerText = `${cantidadNapo} x Napolitana`
    pedidoCantidad.append(divNapo)
}

if (cantidadMorron != 0) {
    let divMorron = document.createElement("div")
    divMorron.innerText = `${cantidadMorron} x Morron`
    pedidoCantidad.append(divMorron)
}

if (cantidadAnana != 0) {
    let divAnana = document.createElement("div")
    divAnana.innerText = `${cantidadAnana} x Anana`
    pedidoCantidad.append(divAnana)
}

subtotal = precioMuzzarella + precioFugazza + precioCantimpalo + precioNapo + precioMorron

divSubtotal.innerText = ` $${subtotal}`