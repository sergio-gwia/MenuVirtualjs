
let contraseña;

let subtotal = 0;

let total;

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

const muzzarella = new Producto("Muzzarella", 0, "Salsa de tomate, Muzzarela y aceitunas", 1200, 120);
const fugazza = new Producto("Fugazza", 0, "Muzzarela, Cebolla y Oregano", 1300, 105);
const napolitana = new Producto("Napolitana", 0, "Muzzarella, ajo, tomates y perejil", 1250, 203);
const morron = new Producto("Muzzarella", 0,"Muzzarella, morron, jamon York y aceitnuas", 1400, 146);

const Pizzas = []

Pizzas.push(muzzarella);
Pizzas.push(fugazza);
Pizzas.push(napolitana);
Pizzas.push(morron);


function crearUsuario() {
 
    if (usuario != null) {

        while (usuario == "") {
            usuario = prompt("Ingrese un usario valido")
        };

        contraseña = prompt("Ingresa una contraseña");

        while (contraseña == "") {   
            contraseña = prompt("Ingrese una contraseña  valida")
        }

        if (contraseña != null && usuario != null) {
            alert("Hola " + usuario + ", gracias por registrarte. Tenes 15% de descuento en tu primer pedido. ")
        }else{
            alert("Podes registrate en otro momento")
        }

    } else {
        alert("Podes registrate en otro momento")
    }

return contraseña, usuario;

}


let usuario = prompt("Hola, bienvenido a Ciccone`s Pizza! \n Registrate y obtene veneficios, Ingresa un usuario AQUI!");


crearUsuario();

if (usuario != null && contraseña != null) {

    let pedido = prompt("Ingresa un numero de opcion para tu pedido: \n 1. Muzzarella $1200 \n 2. Fugazza $1300 \n 3. Napolitana $1250 \n 4. Morron $1400 \n Ingresa listo para finalizar el pedido" )

        if (pedido == 1 || pedido == 2 || pedido == 3 || pedido == 4 || pedido == "listo" || pedido == null) {

            switch (pedido) {
                case "1":
                    Pizzas[0].cantidad++
                    Pizzas[0].descontar()
                    subtotal = subtotal + Pizzas[0].precio
                    break;
                case "2":
                    Pizzas[1].cantidad++
                    Pizzas[1].descontar()
                    subtotal = subtotal + Pizzas[1].precio
                    break;
                case "3":
                    Pizzas[2].cantidad++
                    Pizzas[2].descontar()
                    subtotal = subtotal + Pizzas[2].precio
                    break;
                case "4":
                    Pizzas[3].cantidad++
                    Pizzas[3].descontar()
                    subtotal = subtotal + Pizzas[3].precio
                    break;     
                case "listo":
                    alert("Podes pedir cuando estes listo!")
                    break;
                case null:
                    alert("Podes pedir cuando estes listo!")
                    break;    
                default:
                    break;    
            }        
        } else {
            alert("Ingresaste un producto invalido")
        }
        
    if (pedido !== null) {

        while (pedido !== "listo" || pedido == "") {
    
            pedido = prompt("Podes seguir armando tu pedido! \n Ingresa un numero de opcion: \n 1. Muzzarella $1200 \n 2. Fugazza $1300 \n 3. Napolitana $1250 \n 4. Morron $1400 \n Ingresa listo para finalizar el pedido")

            if (pedido == 1 || pedido == 2 || pedido == 3 || pedido == 4 || pedido == "listo") {

                switch (pedido) {
                    case "1":
                        Pizzas[0].cantidad++
                        Pizzas[0].descontar()
                        subtotal = subtotal + Pizzas[0].precio
                        break;
                    case "2":
                        Pizzas[1].cantidad++
                        Pizzas[1].descontar()
                        subtotal = subtotal + Pizzas[1].precio
                        break;
                    case "3":
                        Pizzas[2].cantidad++
                        Pizzas[2].descontar()
                        subtotal = subtotal + Pizzas[2].precio
                        break;
                    case "4":
                        Pizzas[3].cantidad++
                        Pizzas[3].descontar()
                        subtotal = subtotal + Pizzas[3].precio
                        break;
                    case "":
                        alert("Ingresa un producto valido o la palabra listo para salir")
                        break;       
                    default :

                        if (pedido == "listo") {

                            if(subtotal !== 0) {

                                alert(`Tu pedido es de:\n ${Pizzas[0].cantidad} Muzzarella \n ${Pizzas[1].cantidad} Fugazza \n ${Pizzas[2].cantidad} Napolitana \n ${Pizzas[3].cantidad} Morron` )

                                alert("El subtotal de tu pedido es: $" + subtotal)

                                let descuento = subtotal * 0.15

                                total = subtotal - descuento

                                alert("El total de tu pedido con tu 15% de descuento es $" + total)

                                alert("Muchas gracias por tu compra!")
                            } else {
                                alert("No ingresaste nada a tu pedido! \n Puedes volver a pedir cuando estes listo")
                            }

                        }
                        
                        break;
                    }
            } else {
                alert("Ingresa un producto valido o la palabra listo para salir")
            }
            
        }    

    }
}

