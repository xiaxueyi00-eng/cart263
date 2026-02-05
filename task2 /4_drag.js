
window.onload = setup;
function setup() {
    console.log("drag ex");
    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
    };

    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        // HERE - this refers to the window
        console.log(this);
    };

    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped");
        console.log(event);
    }


    window.addEventListener("dragstart", handleDragging);
    window.addEventListener("dragend", handleDraggingStop);
    window.addEventListener("drop", handleDrop);

    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();
    });
    // Clear the drag data cache (for all formats/types)
    event.dataTransfer.clearData();
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("objDraggedID", event.target.id);

    if (event.target.id === "dropTarget") {
        let theObj = event.dataTransfer.getData("objDraggedID");
        console.log(theObj);
        //event.target is the DIV we have dropped into ...
        // and so move it there..
        event.target.appendChild(document.getElementById(theObj));
    }

}


