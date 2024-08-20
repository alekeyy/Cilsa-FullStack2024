let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");

function estilo1(){
    document.getElementById("stylesheet").href = "style.css";
}

function estilo2(){
    document.getElementById("stylesheet").href = "contraste.css";
}

btn1.addEventListener("click", estilo1);
btn2.addEventListener("click", estilo2);