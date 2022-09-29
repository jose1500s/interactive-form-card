const titular = document.querySelector('#nameOnCard')
const labelTitular = document.querySelector('#labelName')

const tarjeta = document.querySelector('#cardNumber')
const labelTarjeta = document.querySelector('#labelNumbers')

const cvvTarjeta = document.querySelector('#cvv')
const labelCvv = document.querySelector('#labelCvv')

const mesTarjeta = document.querySelector('#month')
const labelMes = document.querySelector('#labelMes')

const yearTarjeta = document.querySelector('#year')
const labelYear = document.querySelector('#labelAnio')

titular.addEventListener('keyup', () => {
    // cada inicio de palabra en mayuscula
    titular.value = titular.value.replace(/\b\w/g, l => l.toUpperCase())
    labelTitular.innerHTML = titular.value.replace(/\b\w/g, l => l.toUpperCase())
    // si no tiene nada, que aparezca el label de nuevo
    if (titular.value == '') {
        labelTitular.innerHTML = 'Jose Antonio Patiño Palomares'
    }
})

tarjeta.addEventListener('keyup', () => {
    labelTarjeta.innerHTML = tarjeta.value
    for(let i = 0; i < tarjeta.value.length; i++) {
        // cada 4 numeros se agrega un espacio
        if(i % 4 === 0) {
            labelTarjeta.innerHTML = tarjeta.value.replace(/(.{4})/g, '$1 ')
        }
        // si se pasan de 16 caracteres, se borra el ultimo caracter
        if(tarjeta.value.length > 16) {
            tarjeta.value = tarjeta.value.slice(0, -1)
        }
    }
    if(tarjeta.value.length < 1) {
        labelTarjeta.innerHTML = '0000 0000 0000 0000'
    }
})

cvvTarjeta.addEventListener('keyup', () => {
    labelCvv.innerHTML = cvvTarjeta.value
    if(cvvTarjeta.value.length < 1) {
        labelCvv.innerHTML = '000'
    }
})

mesTarjeta.addEventListener('change', () => {
    labelMes.innerHTML = mesTarjeta.value
})

yearTarjeta.addEventListener('change', () => {
    labelYear.innerHTML = yearTarjeta.value
})