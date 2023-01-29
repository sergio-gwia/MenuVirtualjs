let botonMuzzarella = document.getElementById("botonMuzzarella")
let botonFuggazza = document.getElementById("botonFuggazza")
let botonCantimpalo = document.getElementById("botonCantimpalo")
let botonNapo = document.getElementById("botonNapo")
let botonMorron = document.getElementById("botonMorron")
 
 
let pedido = JSON.parse(localStorage.getItem("pedido"))

 async function fetchApi(){
    const response = await fetch("../data/data.json")
    const datos = await response.json()

    botonMuzzarella.addEventListener("click", ()=> {
        let muzzarella = datos[0]
        pedido.push(muzzarella)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })

    botonFuggazza.addEventListener("click", ()=>{
        let fugazza = datos[1]
        pedido.push(fugazza)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })

    botonCantimpalo.addEventListener("click", ()=>{
        let cantimpalo = datos[2]
        pedido.push(cantimpalo)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    botonNapo.addEventListener("click", ()=>{
        let napolitana = datos[3]
        pedido.push(napolitana)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })
    
    botonMorron.addEventListener("click", ()=>{
        const morron = datos[4]
        pedido.push(morron)
        localStorage.setItem("pedido", JSON.stringify(pedido))
    })

}

fetchApi()

