let currentColor = "white";

const keyDiv = document.getElementById("key");

const divs = document.querySelectorAll("div[id]");
divs.forEach(function(div) {
    div.setAttribute("data-original-color", div.style.backgroundColor);

    div.addEventListener("click", function() {
        if (div.style.backgroundColor === "black") {
            div.style.backgroundColor = div.getAttribute("data-original-color");
        } else {
            div.style.backgroundColor = "black";
        }
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        currentColor = "pink";
    } else if (event.key === 's') {
        currentColor = "orange";
    } else if (event.key === 'd') {
        currentColor = "lightblue";
    } else if (event.key === 'q') {
        creacion("purple");
    } else if (event.key === 'w') {
        creacion("gray");
    } else if (event.key === 'e') {
        creacion("brown");
    }

    keyDiv.style.backgroundColor = currentColor;
});

function creacion(color) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "1px solid black";
    document.body.appendChild(newDiv);
}
