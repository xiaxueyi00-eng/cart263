window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */
    const allPTags = document.querySelectorAll("p");
    console.log(allPTags);
    /***OUTPUT: 
     * let allPTags = document.getElementsByTagName("p");
    •// 
    
    
    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */
    const firstPTag = document.querySelector("p");
    console.log(firstPTag);
    /***OUTPUT:
     * firstPTag -> the FIRST <p> element
     * example: <p>...</p>
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */
    const allInnerContainers = document.querySelectorAll(".inner-container");
    console.log(allInnerContainers)
    /***OUTPUT:
     * allInnerContainers -> NodeList of ALL elements with class "inner-container"
     * example: <div class="inner-container">...</div>
     */



    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    const lastImgInImgContainer = document.querySelector(".img-container img:last-of-type");
    console.log(lastImgInImgContainer);
    /***OUTPUT:
     * lastImgInImgContainer -> the LAST <img> element inside .img-container
     * example: <img src="..." alt="...">
     */



    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
    const allH2Tags = document.querySelectorAll("h2");
    console.log(allH2Tags);

    const h2Length = allH2Tags.length;
    console.log(h2Length);

    const firstH2Text = allH2Tags[0]?.textContent;
    console.log(firstH2Text);
    /***OUTPUT: 
     * allH2Tags -> HTMLCollection(3)[h2, h2, h2]
     * h2Length -> 3
     * firstH2Text -> "..."
     */


    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */
    const parentEl = document.getElementById("parent");
    console.log(parentEl);
    /***OUTPUT:
     * parentEl -> the element whose id="parent"
     * example: <div id="parent">...</div>
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */
    // ---- TASK 1: CODE START ----
    document.getElementById("1").textContent = "xueyi xia  2026/01/22";
    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/
    /***CODE */
    document.getElementsByClassName("content-container")[0].style.backgroundColor = "orange";
    document.getElementsByClassName("content-container")[1].style.backgroundColor = "purple";


    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */
    document.getElementsByTagName("img")[0].src = "task-2-images/seven.png";
    /*************************************** */
    /*************************************** */
    /* 4: Select the third paragraph element on the page and 
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    /***CODE */
    document.getElementsByTagName("p")[3].innerHTML = "<h2>TEST 123</h2>";
    /*************************************** */

    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and 
    add to the existing content an h2 element containing the text `TEST 123`
    /***CODE */
    document.getElementsByTagName("p")[4].innerHTML += "<h2>TEST 123</h2>";

    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content 
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE */
    document.getElementsByTagName("p")[5].classList.add("newStyle");
    document.getElementsByTagName("p")[5].innerHTML += "<img src='task-2-images/one.png' class='newStyle'>";

    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */
    let colors = ['red', 'blue', 'green', 'orange'];
    let innerContainers = document.getElementsByClassName("inner-container");
    for (let i = 0; i < colors.length; i++) {
        innerContainers[i].style.backgroundColor = colors[i];
    }
    /*************************************** */
    /*** END PART TWO MODIFY */


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
     * allPTagsThree collects ALL <p> elements on the page.
     * The loop goes through the ORIGINAL set of paragraphs and, for each one,
     * appends a NEW green paragraph inside it that says "using create Element".
     * (We use originalLength because getElementsByTagName returns a LIVE collection,
     * and adding new <p> elements would otherwise increase the length while looping.)
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

    // 2A - 2D
    function customNewBoxCreate(parent) {
        // 2B: create new div
        let newDiv = document.createElement("div");
        newDiv.classList.add("testDiv");

        // important for left/top positioning
        newDiv.style.position = "absolute";

        // 2C: append to parent
        parent.appendChild(newDiv);

        // 2D: return the new div
        return newDiv;
    }

    // parent for the grid
    let gridParent = document.querySelector("#new-grid");

    // size of each box (adjust if needed)
    let boxSize = 40;

    // 2E - 2H: nested loops (10 rows x 10 columns)
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {

            // call function + store returned element
            let returnedDiv = customNewBoxCreate(gridParent);

            // 2F: set x,y position
            returnedDiv.style.left = (col * boxSize) + "px";
            returnedDiv.style.top = (row * boxSize) + "px";

            // 2G + 2H: even row vs odd row
            if (row % 2 === 0) {
                returnedDiv.style.backgroundColor = "white";
                returnedDiv.textContent = "EVEN";
            } else {
                returnedDiv.style.backgroundColor = "purple";
                returnedDiv.textContent = "ODD";
            }
        }
    }

    // 2: document how many elements are returned when selecting .testDiv
    console.log(document.getElementsByClassName("testDiv"));
    console.log(document.getElementsByClassName("testDiv").length);

    /***OUTPUT:
     * HTMLCollection(...) [div.testDiv, div.testDiv, ...]
     * 100
     */

    /***EXPLANATION::
     * The nested loop runs 10 rows x 10 columns = 100 times.
     * Each loop creates one new div with class "testDiv" and appends it to #new-grid.
     * Therefore selecting elements with class "testDiv" returns 100 elements.
     * Even-numbered rows (row % 2 === 0) are white and show "EVEN";
     * odd-numbered rows are purple and show "ODD".
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

    // parent for grid II
    let gridParentThree = document.querySelector("#new-grid-three");

    // reuse same box size (keep consistent with grid 1)
    let boxSizeThree = 40;

    // 3A - 3D
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {

            // create new div using the SAME function
            let returnedDiv = customNewBoxCreate(gridParentThree);

            // position it (same logic)
            returnedDiv.style.left = (col * boxSizeThree) + "px";
            returnedDiv.style.top = (row * boxSizeThree) + "px";

            // 3B: remainder when dividing column by 3
            let remainder = col % 3;

            // 3C: color based on remainder
            if (remainder === 0) {
                returnedDiv.style.backgroundColor = "red";
            } else if (remainder === 1) {
                returnedDiv.style.backgroundColor = "orange";
            } else {
                returnedDiv.style.backgroundColor = "yellow";
            }

            // 3D: show remainder text
            returnedDiv.textContent = remainder;
        }
    }

    console.log("Grid II created in #new-grid-three (10x10).");

    /***EXPLANATION::
     * This grid also runs 10 rows x 10 columns = 100 divs.
     * For each column, we calculate col % 3 which gives a remainder of 0, 1, or 2.
     * If remainder is 0: background is red; if 1: orange; if 2: yellow.
     * Each div displays the remainder number as its text content.
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}