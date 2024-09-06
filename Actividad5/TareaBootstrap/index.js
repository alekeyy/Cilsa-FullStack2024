let titulo = document.getElementById("titulo")
let btnSubmit = document.getElementById("btn-submit")
let formInputs = document.querySelectorAll(".form-control");
let formGroup = document.querySelectorAll(".form-group");
let textoFecha = document.getElementById("fecha")

function estiloContraste(){
    //fondo pagina
    document.body.classList.add("bg-dark")

    //textos
    titulo.classList.add("text-light")

    //boton submit
    btnSubmit.classList.add("btn-warning");

    //clases input y form-group
    formInputs.forEach(elem => {
        elem.classList.add("bg-dark");
        elem.classList.add("text-light")
    });
    formGroup.forEach(elem => {
        elem.classList.add("text-light")
    })
}

function estiloNormal(){
    //fondo pagina
    document.body.classList.remove("bg-dark")

    //textos
    titulo.classList.remove("text-light")

    //boton submit
    btnSubmit.classList.remove("btn-warning");
    
    //clases input y form-group
    formInputs.forEach(elem => {
        elem.classList.remove("bg-dark");
        elem.classList.remove("text-light");
    });
    formGroup.forEach(elem => {
        elem.classList.remove("text-light")
    })
}

let btnChange = document.getElementById("btn-contraste")
btnChange.addEventListener("click", estiloContraste)

let btnNormal = document.getElementById("btn-normal")
btnNormal.addEventListener("click", estiloNormal)