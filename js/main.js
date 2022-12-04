
let contraseña;

let subtotal = 0;

let total;


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
                    subtotal = subtotal + 1200
                    break;
                case "2":
                    subtotal = subtotal + 1300
                    break;
                case "3":
                    subtotal = subtotal + 1250
                    break;
                case "4":
                    subtotal = subtotal + 1400
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
                        subtotal = subtotal + 1200
                        break;
                    case "2":
                        subtotal = subtotal + 1300
                        break;
                    case "3":
                        subtotal = subtotal + 1250
                        break;
                    case "4":
                        subtotal = subtotal + 1400
                        break;
                    case "":
                        alert("Ingresa un producto valido o la palabra listo para salir")
                        break;       
                    default :

                        if (pedido == "listo") {

                            if(subtotal !== 0) {
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

