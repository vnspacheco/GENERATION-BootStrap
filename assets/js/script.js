let email = document.querySelector(".email")
let texto = document.querySelector(".texto")
let emailOk = false
let textoOk = false


function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}

function validaTexto () {
    let txtTexto = document.querySelector("#txtTexto")

    if (texto.value.length < 5) {
        txtTexto.innerHTML = "O texto deve conter no mínimo 5 caracteres"
        txtTexto.style.color = "red"
    }
    else {
        txtTexto.innerHTML = ""
        textoOk = true
    }
}

function enviar () {
    if (emailOk == true && textoOk == true ) {
        alert ("Formulário enviado com sucesso!")
    }
    else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}