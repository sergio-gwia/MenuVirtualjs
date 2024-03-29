
let imagen = document.querySelector("#imagen")
let titulo = document.getElementById("titulo")
let ingrediente = document.getElementById("ingrediente")
let precio = document.getElementById("precio")

let pedido = JSON.parse(localStorage.getItem("pedido"))

setTimeout(()=>{
    for (const iterator of pedido) {
        switch (iterator.tipo) {
            case "Muzzarella":
                imagen.src = "../img/pizza-muzzarella.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;
            case "Fugazza":
                imagen.src = "../img/pizza-fuggazza.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;
            case "Cantimpalo":
                imagen.src = "../img/pizza-cantimpalo.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;
            case "Napolitana":
                imagen.src = "../img/pizza-napo.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break; 
            case "Morron":
                imagen.src = "../img/pizza-morron.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;  
            case "Anana":
                imagen.src = "../img/pizza-anana.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;
            case "Roquefort":
                imagen.src = "../img/pizza-roquefort.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;
            case "Jamon":
                imagen.src = "../img/pizza-jamon.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;
            case "Huevo":
                imagen.src = "../img/pizza-huevo.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;    
            case "Anchoas":
                imagen.src = "../img/pizza-anchoas.svg"
                titulo.innerText = `${iterator.tipo}`
                ingrediente.innerText = `${iterator.ingrediente}`
                break;                                                          
            default:
                break;
        }
    }
}, 1500)

