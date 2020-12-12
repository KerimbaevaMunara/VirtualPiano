
document.addEventListener("keydown", function (event) {
    let x = event.key;
    x = x.toUpperCase();
    if (x === 'A' || x === 'S' || x === 'D' || x === 'F' || x === 'G' || x === 'H' || x === 'J' || x === 'W' || x === 'E' || x === 'T' || x === 'Y' || x === 'U')
    {
        /* console.log("The '" + x + "' key is pressed");*/
        let audio = new Audio("media/" + x + ".mp3");
        audio.play();
    }
    /*else console.log("another key is pressed");*/
});



