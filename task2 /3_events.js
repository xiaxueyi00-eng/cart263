window.onload = setup;

function setup() {

    let selection = document.querySelectorAll(".mouseclick-active-section");
    selection.forEach(element => {
        element.addEventListener("click", function (e) {
            //when you click, if it is inavtive, do below. and set the custom-bool to active. so when you click secound not do again.
            if (this.getAttribute("custom-bool") === "inactive") {
                this.setAttribute("custom-bool", "active");
                //set the custom-bool active
                console.log("is inactive");
                console.log(this.id) //print it's id
                this.style.opacity = 0.5;
            }

            else {
                //if the state is inactive, than select change the state to inactive and set the opacity to 1
                this.setAttribute("custom-bool", "inactive");
                this.style.opacity = 1.0;
            }
        });

        document.querySelector("#bubbleButton").addEventListener("click", function () {
            console.log("button clicked");

            let bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
            bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
            console.log(bubble.style.left);

            let r = Math.ceil(Math.random() * 255); //new Math.ceil
            let g = Math.ceil(Math.random() * 255);
            let b = Math.ceil(Math.random() * 255);

            bubble.style.background = `rgba(${r},${g},${b})`;

            document.getElementById("top-layer").appendChild(bubble)
        });

    });
}
