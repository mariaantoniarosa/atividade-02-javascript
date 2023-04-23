
function numArray() {
    let numeros = [1, 2, 3, 4];


    var num = (numeros[numeros.length - 1]);
    document.getElementById("resp").value = num;
    return num;
}

function numCaracteres() {
    let frutas = ["banana", "maçã", "laranja", "caqui", "ameixa"];
    let totalCaracteres = 0;
    for (let i = 0; i < frutas.length; i++) {
        totalCaracteres += frutas[i].length;
    }
    document.getElementById("resp2").value = totalCaracteres;

    return totalCaracteres;
}

function salvaEmail() {
    var nomesCadastrados = [];
    var emailCadastrados = [];

    var cont = 0;
    // if (cont>9){ 
    //     alert("Somente até 3 cadastros.");
    // }
    while (cont < 3) {
        for (var i = 0; i < 3; i++) {
            var email = document.getElementById("email").value;
            var nome = document.getElementById("nome").value;
            nomesCadastrados.push(nome);
            emailCadastrados.push(email);
            cont++;

        }
        console.log(cont)


    }


    for (var i = 0; i < 3; i++) {

        if ((document.getElementById("usuario").value) == (nomesCadastrados[i])) {
            var emaildoUsuario = emailCadastrados[i];
            document.getElementById("emailUsuario").value = emaildoUsuario;

        }
        return emaildoUsuario;

    }
}
function fruteira() {
    var frutas = ["ameixa", "manga"]
    for (var i = 0; i < 5; i++) {
        if ((document.getElementById("escolher").value) === (frutas[0]) || ((document.getElementById("escolher").value) === (frutas[1]))) {
            alert("Escolha certa!");
            break;
        } else if ((document.getElementById("escolher").value) != (frutas[i])) {
            alert("Infelizmente não há mais frutas deste sabor!  :(")
            break;
        }

    }
}

function dobro() {

    number = document.getElementById("numero").value;

    if (number >= 0) {
        number = number * 2;
        document.getElementById("dobro").value = number;
        return number;
    } else {
        alert("numero indisponivel!")
    }

}

function dobro2() {
    var numero = [];
    var cont = 0;

    for (var i = 0; i < 3; i++) {
        number2 = document.getElementById("numero2").value;
        if (number2 >= 0) {
            number2 = number2 * 2;
            document.getElementById("dobro2").value = number2;
            return number2;

        } else if (number2 < 0 || i > 3) {
            alert("numero indisponivel");
            break;
        }

    }
}

function animais() {
    var animais = ["vaca", "cachorro", "gato", "onca"]
    for (var i = 0; i < 4; i++) {
        animal = document.getElementById("escolher2").value;
        if (animais[i] == animal) {
            alert("O animal está na posição " + [i]);
        }
    }
}

function stringMaiuscula() {
    var minuscula = "sharks";
    var maiuscula = minuscula.toUpperCase();
    alert(maiuscula);

}
function nome(dobro3) {

    dobro3 = 1;
    var novo = dobro3;
    alert(novo);
    return novo;
}

function stringQuant() {
    var quant = document.getElementById("stringQuant").value;
    var numeroVogal = 0;
    var regEx = /[aeiou]/i;
    cont = 0;
    for (var i = 0; i < quant.length; i++) {
        if (quant[i].match(regEx)) {
            cont++;
        }
    }
    alert("numero de vogais é: " + cont)

}

function fatorar() {
    numero = document.getElementById("numero3").value;
    var fatores = [];
    for (var i = 2; i <= numero; i++) {
        while (numero % i === 0) {
            fatores.push(i);
            numero /= i;
        }


    }

    document.getElementById("numero4").value = numero;
    return numero;

}

function validador() {
    var nome = document.faleconosco.nome.value;
    var expRegNome = new RegExp("^[a-zA-ZÀ-ú ]+$");
    var email = document.faleconosco.email.value;
    var expRegEmail = new RegExp("^\\S+@\\S+\\.\\S+$");

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo do nome corretamente!");
        document.faleconosco.email.focus();
        return false;

    } else if (!expRegEmail.test(email)) {
        alert("Preencha o campo de email corretamente!");
        document.faleconosco.email.focus();
        return false;
    }
}

function validaInfo() {
    idade = document.getElementById("idade").value;
    altura = document.getElementById("altura").value;

    if ((idade >= 18) && (idade < 60)) {
        console.log("ok.");
    } else {
        alert("Você não possui a idade adequada.");

    }
    if ((altura >= 150) && (altura <= 200)) {
        console.log("ok");
    } else {
        alert("você não possui a altura adequada, escreva sua altura em cm.")
    }

}




