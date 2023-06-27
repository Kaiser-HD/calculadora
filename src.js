const visor = document.querySelector('.visor')

visor.innerHTML += ''

function clickButton(element) {
    const operacao = element.id === '/' || element.id === '*' || element.id === '-' || element.id === '+' || element.id === '.'
    const action = element.id === '=' || element.id === '%' || element.id === 'back' || operacao;

    if (element.id === '%') {
        visor.innerHTML = eval(visor.innerHTML) / 100
    }
    if (operacao) {
        let text = visor.innerHTML
        let array = text.split("")
        let op = array[array.length - 1]
        if (op === '/' || op === '*' || op === '-' || op === '+') {
            array.pop('')
        }
        visor.innerHTML = array.join('')
        visor.innerHTML += element.id
    }
    if (!action) {
        visor.innerHTML += element.id
    }
    if (element.id === 'clear') {
        visor.innerHTML = ''
    }
    if (element.id === '=') {
        let text = visor.innerHTML
        let array = text.split("")
        let op = array[array.length - 1]
        if (op === ' ') {
            visor.innerHTML = 0
        }
        if (op === '/' || op === '*' || op === '-' || op === '+') {
            array.pop('')
            visor.innerHTML = array.join('')
        }
        visor.innerHTML = eval(visor.innerHTML)
    }
    if (element.id === 'back') {
        let text = visor.innerHTML
        let array = text.split("")
        array.pop()
        visor.innerHTML = array.join('')
    }
}