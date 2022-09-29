// validar el formulario de envio de la tarjeta 


// datos del formulario
const numbers = document.querySelector('#cardNumber')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const cvv = document.querySelector('#cvv')

const btnConfirmarForm = document.querySelector('#confirmButton')
btnConfirmarForm.disabled = 'true'
btnConfirmarForm.classList.add('cursor-not-allowed')
let [stateName, stateCard, stateCvv] = [false, false, false]

function containsNumbers(str) {
    return /\d/.test(str);
}

function validarFormulario() {
    validarNombre()
    validarTarjeta()
    validarCvv()

    const mes = document.querySelector('#month')
    const year = document.querySelector('#year')

    mes.addEventListener('change', () => {
        mes.style.border = '2px solid green'
    })

    year.addEventListener('change', () => {
        year.style.border = '2px solid green'
    })
}

validarFormulario()

function validarNombre() {
    const name = document.querySelector('#nameOnCard')
    name.addEventListener('blur', () => {
        if (containsNumbers(name.value)) {
            Toastify({
                text: "El nombre no debe contener números",
                className: "info",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: {
                  fontSize: "1.2rem",
                  textAlign: "center",
                  borderRadius: "0.5rem"
                }
              }).showToast();
            name.style.border = '2px solid hsl(0, 100%, 66%)'
            stateName = false
        } else if(name.value.length < 1) {
            name.style.border = '2px solid hsl(0, 100%, 66%)'
            stateName = false // se lo vuekvi a asignar por que cuando escribe un valor correcto y cambia a true, y luego borra ese valor se queda cmo true la variable.
        }  else {
            name.style.border = '2px solid green'
            stateName = true
        }
    })
}

function validarTarjeta() {
    numbers.addEventListener('blur', () => {
        if (numbers.value.length < 16 && numbers.value.length > 0) {
            Toastify({
                text: "El número de tarjeta debe tener 16 dígitos minimo",
                className: "info",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: {
                  fontSize: "1.2rem",
                  textAlign: "center",
                  borderRadius: "0.5rem"
                }
              }).showToast();
            numbers.style.border = '2px solid hsl(0, 100%, 66%)'
            stateCard = false
        } else if (numbers.value.length === 0) {
            numbers.style.border = '2px solid hsl(0, 100%, 66%)'
            stateCard = false
        } else {
            numbers.style.border = '2px solid green'
            stateCard = true
        }
    })
}

function validarCvv() {
   cvv.addEventListener('blur', () => {
        if(cvv.value.length < 3 || cvv.value.length > 3) {
            Toastify({
                text: "El CVV debe tener 3 dígitos",
                className: "info",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: {
                fontSize: "1.2rem",
                textAlign: "center",
                borderRadius: "0.5rem"
                }
            }).showToast();
            cvv.style.border = '2px solid hsl(0, 100%, 66%)'
            stateCvv = false
        } else if (cvv.value === 0 || cvv.value < 0) {
            cvv.style.border = '2px solid hsl(0, 100%, 66%)'
            stateCvv = false
        } else {
            cvv.style.border = '2px solid green'
            stateCvv = true
        }
    })
}

numbers.addEventListener('blur', () => {
    if (stateName && stateCard && stateCvv) {
        btnConfirmarForm.disabled = false
        btnConfirmarForm.classList.remove('cursor-not-allowed')
    } else {
        btnConfirmarForm.disabled = 'true'
        btnConfirmarForm.classList.add('cursor-not-allowed')
    }
})

cvv.addEventListener('blur', () => {
    if (stateName && stateCard && stateCvv) {
        btnConfirmarForm.disabled = false
        btnConfirmarForm.classList.remove('cursor-not-allowed')
    } else {
        btnConfirmarForm.disabled = 'true'
        btnConfirmarForm.classList.add('cursor-not-allowed')
    }
})

const name2 = document.querySelector('#nameOnCard')
name2.addEventListener('blur', () => {
    
    if (stateName && stateCard && stateCvv) {
        btnConfirmarForm.disabled = false
        btnConfirmarForm.classList.remove('cursor-not-allowed')
    } else {
        btnConfirmarForm.disabled = 'true'
        btnConfirmarForm.classList.add('cursor-not-allowed')
    }
})



