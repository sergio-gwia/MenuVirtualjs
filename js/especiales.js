
let botonAnana = document.getElementById("botonAnana")
let botonRoquefort = document.getElementById("botonRoquefort")
let botonJamon = document.getElementById("botonJamon")
let botonHuevo = document.getElementById("botonHuevo")
let botonAnchoas = document.getElementById("botonAnchoas")

let pedido = JSON.parse(localStorage.getItem("pedido"))

async function fetchApi(){
    const response = await fetch("../data/data.json")
    const datos = await response.json()

    botonAnana.addEventListener("click", ()=> {
        let anana = datos[5]
        pedido.push(anana)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    botonRoquefort.addEventListener("click", ()=>{
        let roquefort = datos[6]
        pedido.push(roquefort)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    botonJamon.addEventListener("click", ()=>{
        let jamon = datos[7]
        pedido.push(jamon)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    botonHuevo.addEventListener("click", ()=>{
        let huevo = datos[8]
        pedido.push(huevo)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    botonAnchoas.addEventListener("click", ()=>{
        const anchoas = datos[9]
        pedido.push(anchoas)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    
}

fetchApi();