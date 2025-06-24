


btn_enviar.addEventListener('click', function (event) {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    console.log(nome);
    console.log(idade);
    if (idade < 18) {
        /* alert(nome + " é menor de idade!"); */
        document.getElementById("resultado").value = nome + " é menor de idade!";
    }
    if (idade >= 18) {
        /* alert(nome + " é maior de idade!"); */
        document.getElementById("resultado").value = nome + " é maior de idade!";
    }
});