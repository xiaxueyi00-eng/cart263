
let speedX = 5;

window.onload = function () {


    window.addEventListener("keydown", function (event) {
        // document.querySelector("#textContainer").textContent += `${event.key} `;
        if (event.key === "ArrowRight") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) + speedX + "px";

        } else if (event.key === "ArrowLeft") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        }
        else if (event.code === "Space") {
            document.getElementById("boxB").style.background = "orange";

        }
        window.addEventListener("keyup", function (event) {
            console.log("keyup");
        });
        if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
        }

    }