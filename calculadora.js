    soma.addEventListener('click', function () {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const resultado = num1 + num2;

        alert('O resultado da adição é: ' + resultado);
    });

    sub.addEventListener('click', function () {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const resultado = num1 - num2;

        alert('O resultado da subtração é: ' + resultado);
    });

    multi.addEventListener('click', function () {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const resultado = num1 * num2;

        alert('O resultado da multiplicação é: ' + resultado);
    });
    div.addEventListener('click', function () {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const resultado = num1 / num2;

        alert('O resultado da divisão é: ' + resultado);
    });