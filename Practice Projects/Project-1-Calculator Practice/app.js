function number(value) {
    document.getElementById('result').value += value
}

function equalTo() {
    let input = document.getElementById('result').value
    let output = eval(input)
    document.getElementById('result').value = output
}

function clearResult() {
    document.getElementById('result').value = ''
}