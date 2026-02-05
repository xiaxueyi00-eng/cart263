let speedX = 5;
let fastSpeedX = 15;
let turbo = false;

window.onload = function () {

    window.setInterval(moveBoxB, 1000);

    function moveBoxB() {
        let parent = document.getElementById("boxB");
        parent.style.left = parseInt(parent.style.left) + 10 + "px";
    }

    window.addEventListener("keydown", function (event) {
        // this.document.getElementById("textContainer").textContent

        if (event.key === "ArrowRight") {

            if (turbo) {
                document.getElementById("boxA").style.left =
                    parseInt(this.document.getElementById("boxA").style.left);
            }
            else {
                document.getElementById("boxA").style.left =
                    parseInt(this.document.getElementById("boxA").style.left);
            }

        }
    });

};