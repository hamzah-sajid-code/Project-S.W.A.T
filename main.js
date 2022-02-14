var i = 0;
var txt = 'Project S.W.A.T is a multiplayer first person shooter focused on slower paced gameplay.The game is still very early in development but now public beta is open!'; /* The text */
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameFeatures").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();