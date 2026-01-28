// CART 263 – Task 2
// Group Members: Xueyi Xia & Weini Wang

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
    // document.getElementById("1").textContent =
    // "New text in paragraph one: text changed by Xueyi Xia on the following date: 2026/01/27.";
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



    // // /*************************************** */
    // // /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    // // then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    // // Next, iterate over the colors array, and for each color: 
    // // assign the element from innerContainers variable with the same index 
    // // (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    // // a background using that color.
    // // /***CODE */
    // // // add the array
    // let colors = ['red', 'blue', 'green', 'orange'];

    // // select all elements with class "inner-container"
    // let innerContainers = document.getElementsByClassName("inner-container");

    // // // iterate over colors and apply each one to the matching inner-container
    // for (let i = 0; i < innerContainers.length; i++) {
    //     innerContainers[i].style.backgroundColor = colors[i % colors.length];
    // }
    // // /*************************************** */
    // // /*** END PART TWO MODIFY */


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
        parent.insertAdjacentElement("afterend", newP);
    }

    // 1H
    let originalLength = allPTagsThree.length; // IMPORTANT: freeze the original length
    for (let i = 0; i < originalLength; i++) {
        customCreateElement(allPTagsThree[i]);
    }

    /***EXPLANATION:
* allPTags Three stores all <p> elements on the page.
* customCreateElement() creates a new element <p> with the text "using createElement."
* sets a green background with white text and appends it to the current parent paragraph.
* The for loop runs once per paragraph, so every original paragraph gets a new styled paragraph added.
*/


    /*************************************** */
    /* 2: GRID OF BOXES */
    /***CODE */

    console.log(document.getElementsByClassName("testDiv"));
    console.log("testDiv count BEFORE creating grid 1:", document.getElementsByClassName("testDiv").length);
    /***OUTPUT:
 * HTMLCollection(0) []
 * testDiv count BEFORE creating grid 1: 0
 */
    /***EXPLANATION::
  * At this moment, there are NO elements in the original HTML that have class="testDiv".
  * So selecting ".testDiv" returns 0 elements.
  */

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

    function customNewBoxCreate(parent) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");
        newDiv.style.position = "absolute";
        parent.appendChild(newDiv);
        return newDiv;
    }

    let gridParent = document.getElementById("new-grid");
    gridParent.style.position = "relative";

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let returnedDiv = customNewBoxCreate(gridParent);

            returnedDiv.style.left = (i * cellSize) + "px";
            returnedDiv.style.top = (j * cellSize) + "px";
            returnedDiv.style.width = cellSize + "px";
            returnedDiv.style.height = cellSize + "px";

            // BONUS I: even row vs odd row 
            if (j % 2 === 0) {
                returnedDiv.style.backgroundColor = "white";
                returnedDiv.textContent = "EVEN";
            } else {
                returnedDiv.style.backgroundColor = "purple";
                returnedDiv.textContent = "ODD";
            }
        }
    }

    console.log(document.getElementsByClassName("testDiv"));
    console.log("testDiv count AFTER creating grid 1:", document.getElementsByClassName("testDiv").length);
    /***OUTPUT:
 * HTMLCollection(100) [div.testDiv, div.testDiv, ...]
 * testDiv count AFTER creating grid 1: 100
 */
    /***EXPLANATION::
    * The nested for loop runs 10 rows x 10 columns = 100 times.
    * Each time, customNewBoxCreate() creates and appends one <div class="testDiv"> into #new-grid.
    * That is why selecting all elements with class "testDiv" returns 100 elements.
    * BONUS I: even-numbered rows are white; odd-numbered rows are cornflower blue. 
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
    let grid2Parent = document.getElementById("new-grid-three");
    grid2Parent.style.position = "relative";
    grid2Parent.style.width = (10 * cellSize) + "px";
    grid2Parent.style.height = (10 * cellSize) + "px";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let returnedDiv = customNewBoxCreate(grid2Parent);

            returnedDiv.style.left = (i * cellSize) + "px";
            returnedDiv.style.top = (j * cellSize) + "px";
            returnedDiv.style.width = cellSize + "px";
            returnedDiv.style.height = cellSize + "px";

            if (i % 3 === 0) {
                returnedDiv.style.background = "red";
                returnedDiv.textContent = "0";
            } else if (i % 3 === 1) {
                returnedDiv.style.background = "orange";
                returnedDiv.textContent = "1";
            } else {
                returnedDiv.style.background = "yellow";
                returnedDiv.textContent = "2";
            }
        }
    }

    /***EXPLANATION::
    * This creates a second 10x10 grid inside the element with id "new-grid-three."
    * For each cell, we calculate the remainder (column % 3), which can only be 0, 1, or 2.
    * Remainder 0 -> red, remainder 1 -> orange, remainder 2 -> yellow.
    * Each cell displays its remainder value as text (0/1/2).
    */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */
}




