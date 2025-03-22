// Functie voor het afspelen van geluid
function speelGeluid() {
    document.getElementById("geluid").play();
}

// Functie voor het verplaatsen van de knop naar de neus
function plaatsKnop() {
    let breedte = window.innerWidth;
    let hoogte = window.innerHeight;

    let neusX = 0.57; // Pas deze waarden aan totdat de knop perfect op de neus zit
    let neusY = 0.75;

    let x = breedte * neusX;
    let y = hoogte * neusY;

    let knop = document.getElementById('neusknop');
    knop.style.left = x + 'px';
    knop.style.top = y + 'px';
}

// Zorg ervoor dat de knop goed geplaatst wordt na het laden van de pagina en bij het herformatteren van het scherm
window.onload = plaatsKnop;
window.onresize = plaatsKnop;


var parent = document.getElementById('container1');
var child = document.getElementById('container2');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";