




function saludar() {
    const nombre = prompt("Por favor ingrese su nombre")
    const apellido = prompt("Por favor ingrese su apellido")
    const NombreApellido = ("Bienvenido/a " + nombre + (" ") + apellido)

    alert(NombreApellido);
};

saludar()

confirm ("Debe aceptar los términos y condiciones para conocer la lista de descargas disponibles")

const descargasDisponibles = ["El arte de la guerra, El principito, Zen en el tiro del arco y flecha, Garcia Lorca en el país de Dalí, El cerebro y el arte moderno"]

alert(descargasDisponibles)








alert("Debes ser mayor de edad para continuar")

let edad = parseInt(prompt("Por favor ingrese su edad"))

if (edad >= 18) {
    alert("Puede ingresar a nuestra web")
    confirm("Desea comenzar con la descarga?")
    for (let i = 10; i >= 0; i--) {
        if (i === 0) {
            console.log('Su descarga ha comenzado')
        } else {
            console.log('Su descarga comienza en ' + i + ' segundos')
        }
    }
} else if (isNaN(edad)) {
    alert("Por favor ingrese un tipo de dato válido")
} else {
    alert("Debe ser mayor de edad para navegar en nuestra web")
}





