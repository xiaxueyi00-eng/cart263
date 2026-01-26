window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */
    console.log(document.getElementsByTagName("p"));
/***OUTPUT: 
 * * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, 
 * p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, 
 * p#8.img-descript, p#9.img-descript]
     */




    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */  console.log(document.getElementsByTagName("p")[0]);
    /***OUTPUT: <p id="1">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                 laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                 officiis non
                 quasi officia sit veniam!
             </p>
      * 
      */

    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */
    console.log(document.getElementsByClassName("inner-container"));
    /***OUTPUT: HTMLCollection(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
     * 
     */

    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    let imgsInContainers = document.querySelectorAll(".img-container img");
    console.log(imgsInContainers[imgsInContainers.length - 1]);

    /***OUTPUT:
     /***OUTPUT:
 * <img class="img-image" src="task-2-images/seventeen.png">
 */


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
    console.log(document.querySelectorAll("h2")); // 5A
    console.log(document.querySelectorAll("h2").length); // 5B
    console.log(document.querySelectorAll("h2")[0].textContent); // 5C
    /***OUTPUT: <h2> The header of this fancy page</h2>  A)
     * 1 B)
     * The header of this fancy page C)
     */


    /*************************************** */
    /* 6: the element with id name parent */
   /***CODE */ console.log(document.getElementById("parent"));

    /***OUTPUT: <section id="parent">
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/sixteen.png">
                    </div>
                    <p id="2" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/eight.png">
                    </div>
                    <p id="3" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">

                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/eleven.png">
                    </div>
                    <p id="4" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/fifteen.png">
                    </div>
                    <p id="5" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/five.png">
                    </div>
                    <p id="6" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/three.png">
                    </div>
                    <p id="7" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/twelve.png">
                    </div>
                    <p id="8" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/seventeen.png">
                    </div>
                    <p id="9" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
        </section>
     * 
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    // /*************************************** */
    // /*** START PART TWO MODIFY */
    // /*************************************** */
    // /* 1: Select the first paragraph and replace the text within the paragraph... */
    // /***CODE */
    // document.getElementById("1").textContent = "Xueyi Xia  2026/01/22";
    // /*************************************** */
    // /* 2: Select all elements in the HTML that have the class name content-container
    //  and change the background color ... of first and second ...*/
    // /***CODE */
    // document.getElementsByClassName("content-container")[0].style.background = "orange";
    // document.getElementsByClassName("content-container")[1].style.background = "purple";

    // /*************************************** */
    // /* 3: Change the src element of the first image element on the page to be ...
    // /***CODE */
    // document.getElementsByClassName("img-image")[0].src = "task-2-images/seven.png";

    // /*************************************** */
    // /* 4: Select the third paragraph element on the page and 
    // replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    // /***CODE */ document.getElementById("3").innerHTML = "<h2>TEST 123</h2>";

    // /*************************************** */
    // /* 5: Select the fourth paragraph element on the page and 
    // add to the existing content an h2 element containing the text `TEST 123`
    // /***CODE */
    // document.getElementById("4").innerHTML += "<h2>TEST 123</h2>";
    // /*************************************** */
    // /* 6: Select the fifth paragraph element on the page and add to the existing content
    // an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    // /***CODE */
    // let p5 = document.getElementById("5");
    // p5.innerHTML += '<img src="task-2-images/one.png">';
    // p5.classList.add("newStyle");



    // /*************************************** */
    // /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    // then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    // Next, iterate over the colors array, and for each color: 
    // assign the element from innerContainers variable with the same index 
    // (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    // a background using that color.
    // /***CODE */
    // // add the array
    // let colors = ['red', 'blue', 'green', 'orange'];

    // // select all elements with class "inner-container"
    // let innerContainers = document.getElementsByClassName("inner-container");

    // // iterate over colors and apply each one to the matching inner-container
    // for (let i = 0; i < colors.length; i++) {
    //     if (innerContainers[i]) {
    //         innerContainers[i].style.backgroundColor = colors[i];
    //     }
    // }

    // /*************************************** */
    // /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /***CODE */

    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /***CODE */

    // 1A
    let allPTagsThree = document.getElementsByTagName("p");
    console.log(allPTagsThree);
    /***OUTPUT:
     * HTMLCollection(...) [p#1, p#2..., ...]
     */

    // 1B - 1G
    function customCreateElement(parent) {
        // 1C
        let newP = document.createElement("p");

        // 1D
        newP.textContent = "using create Element";

        // 1E
        newP.style.backgroundColor = "green";

        // 1F
        newP.style.color = "white";

        // 1G
        parent.appendChild(newP);
    }

    // 1H
    let originalLength = allPTagsThree.length; // IMPORTANT: freeze the original length
    for (let i = 0; i < originalLength; i++) {
        customCreateElement(allPTagsThree[i]);
    }

    /***EXPLANATION::
     * allPTagsThree stores all <p> elements on the page.
     * customCreateElement() creates a new <p> with the text "using create Element",
     * sets a green background with white text, and appends it to the current parent paragraph.
     * The for loop runs once per paragraph, so every original paragraph gets a new styled paragraph added.
     */


    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/
    /***CODE */
    // grid settings
    let cols = 10;
    let rows = 10;
    let cellSize = 40;

    // parent for the grid
    let newGrid = document.getElementById("new-grid");
    console.log(newGrid);
    /***OUTPUT:
     * <div id="new-grid"> ... </div>   (or similar)
     */

    // allow absolute positioned children to layout correctly
    newGrid.style.position = "relative";
    newGrid.style.height = (rows * cellSize) + "px";

    // 2A: function
    function customNewBoxCreate(parent) {

        // 2B: create new div with class testDiv
        let newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");

        // make it visible + positionable
        newDiv.style.position = "absolute";
        newDiv.style.width = cellSize + "px";
        newDiv.style.height = cellSize + "px";
        newDiv.style.border = "1px solid black";

        // 2C: append
        parent.appendChild(newDiv);

        // 2D: return
        return newDiv;
    }

    // 2E + 2F + BONUS I
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            let returnedDiv = customNewBoxCreate(newGrid);

            // position
            returnedDiv.style.left = (c * cellSize) + "px";
            returnedDiv.style.top = (r * cellSize) + "px";

            // BONUS I + BONUS II
            if (r % 2 === 0) {
                returnedDiv.style.backgroundColor = "white";
                returnedDiv.textContent = "EVEN";
            } else {
                returnedDiv.style.backgroundColor = "purple";
                returnedDiv.textContent = "ODD";
            }
        }
    }
    // document how many elements are returned
    let allTestDivs = document.getElementsByClassName("testDiv");
    console.log(allTestDivs);
    console.log("Number of testDiv elements:", allTestDivs.length);

    /***OUTPUT:
     * HTMLCollection(100) [div.testDiv, div.testDiv, div.testDiv, ...]
     * Number of testDiv elements: 100
     */

    /***EXPLANATION::
     * The nested for loop runs 10 rows x 10 columns = 100 times.
     * Each time, customNewBoxCreate() creates and appends one <div class="testDiv"> into #new-grid.
     * That is why selecting all elements with class "testDiv" returns 100 elements.
     * BONUS I: even-numbered rows are white; odd-numbered rows are cornflowerblue.
     */


    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder 
        when dividing by three. */
    /***CODE */
    /*************************************** */
    /* 3: GRID OF BOXES II */
    /***CODE */

    // parent element for the second grid
    let newGridThree = document.getElementById("new-grid-three");
    console.log(newGridThree);
    /***OUTPUT:
     * <div id="new-grid-three">...</div>
     */

    // make sure children positioned with absolute work correctly
    newGridThree.style.position = "relative";
    newGridThree.style.height = (rows * cellSize) + "px";

    // 3A: ANOTHER nested loop (10 rows x 10 cols)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            // create a new div using the SAME function
            let returnedDiv = customNewBoxCreate(newGridThree);

            // set position in the grid
            returnedDiv.style.left = (c * cellSize) + "px";
            returnedDiv.style.top = (r * cellSize) + "px";

            // 3B: check remainder using % operator (based on column)
            let rem = c % 3;

            // 3C: background color based on remainder
            if (rem === 0) {
                returnedDiv.style.backgroundColor = "red";
            } else if (rem === 1) {
                returnedDiv.style.backgroundColor = "orange";
            } else {
                returnedDiv.style.backgroundColor = "yellow";
            }

            // 3D: put remainder text inside the div
            returnedDiv.textContent = rem;
        }
    }

    /***EXPLANATION::
     * This creates a second 10x10 grid inside the element with id "new-grid-three".
     * For each cell, we calculate the remainder (column % 3), which can only be 0, 1, or 2.
     * Remainder 0 -> red, remainder 1 -> orange, remainder 2 -> yellow.
     * Each cell displays its remainder value as text (0/1/2).
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */
}




