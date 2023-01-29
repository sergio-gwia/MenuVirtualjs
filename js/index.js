console.log("Pagina principal")

let carrito = JSON.parse(localStorage.getItem("pedido"))

let divPedido = document.querySelector("#divPedido")

if (carrito == null) {
    localStorage.setItem("pedido", JSON.stringify([]))
} 

if (carrito != null & carrito.length != 0) {
    btnPedido = document.createElement("button")
    btnPedido.innerText = "Ver mi Carrito"
    btnPedido.classList.add("btn")
    btnPedido.classList.add("btn-success")
    divPedido.appendChild(btnPedido)
}

btnPedido.addEventListener("click", ()=>{
    window.location.href = `/pages/finalizar_pedido.html`
})