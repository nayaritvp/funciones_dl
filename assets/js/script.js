/*function pintar(){
    ele.style.backgroundColor = 'green'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

A continuación la modificación*/


function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const cambio = document.getElementById("ele1");
cambio.addEventListener("click", function() {
    pintar(cambio, 'yellow');
});

pintar(cambio);