function fill() {
    let textTag = document.getElementById("paragraph");

    let redBorder = document.getElementById("redBorder").value;

    let blueBorder = document.getElementById("blueBorder").value;

    let greenBorder = document.getElementById("greenBorder").value;

    let width = document.getElementById("width").value;

    let red = document.getElementById("red").value;

    let blue = document.getElementById("blue").value;

    let green = document.getElementById("green").value;

 
    document.getElementById("paragraph").style.borderWidth = [width + "px"];
    document.getElementById("paragraph").style.backgroundColor = rgb(red, green, blue);
    document.getElementById("paragraph").style.borderColor = rgb(redBorder, greenBorder, blueBorder);

}


function rgb(r, g, b) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(" + r + "," + g + "," + b + ")"];
}