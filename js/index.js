console.log("Pagina principal")

let carrito = JSON.parse(localStorage.getItem("pedido"))

if (carrito == null) {
    localStorage.setItem("pedido", JSON.stringify([]))
}

