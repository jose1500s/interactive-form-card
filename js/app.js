const btnConfirmar = document.querySelector('#confirmButton')

const form = document.querySelector('.form__container')
const spinner = document.querySelector('.spinner')
const mensajeConfirmacion = document.querySelector('.confirmationMessage')

btnConfirmar.addEventListener('click', (e) => {
    e.preventDefault()

    form.classList.add('ocultar')
    // mostrar el spinner por 2.2 segundos y despues el mensaje confirmacion
    // spinner.classList.remove('spinner')

    if (window.innerWidth > 767) {
        spinner.classList.add('centrar')
    } else {
        spinner.classList.add('centrarMobile')
    }

    setTimeout(() => {

        if (window.innerWidth > 767) {
            mensajeConfirmacion.classList.add('mostrarConfirmacionDesktop')
        } else {
            mensajeConfirmacion.classList.add('mostrarConfirmacionMobile')
        }
        // cuando pase el tiempo, quitar el spinner
        spinner.classList.add('spinner')
        spinner.classList.remove('centrar')
        spinner.classList.remove('centrarMobile')
    }, 6200)

})

const btnContinue = document.querySelector('#btnContinue')

btnContinue.addEventListener('click', (e) => {
    e.preventDefault()
    if (window.innerWidth > 767) {
        form.style.display = 'flex'
        mensajeConfirmacion.classList.remove('mostrarConfirmacionDesktop')
        
    } else {
        form.style.display = 'block'
        mensajeConfirmacion.classList.remove('mostrarConfirmacionMobile')
    }

    form.classList.remove('ocultar')
    // limpiar los inputs del form
    document.querySelector('#month').value = ''
    document.querySelector('#year').value = ''
    document.querySelector('#cvv').value = ''
    document.querySelector('#cardNumber').value = ''
    document.querySelector('#nameOnCard').value = ''
    location.reload()
})