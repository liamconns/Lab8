


let x = 0;
let kuPhoto = ["ku1.jpg", "ku2.jpg", "ku3.jpg", "ku4.jpg", "ku5.jpg"];


function next() {
    x = x + 1;
    if (x > 4) {
        x = 0;
    }
    document.getElementById("image").src = kuPhoto[x];
}

function back() {

    x = x - 1;
    if (x < 0) {
        x = 4;
    }
    document.getElementById("image").src = kuPhoto[x];

}
