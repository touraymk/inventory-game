
let objectSelected;
let button = document.getElementById('btn');

function objectPressed(element) { /* If the item that is clicked is the same as last pressed, then we deselect the item.
                                    When a different item is clicked it toggles the borders on both items, sets the clicked item as selected
                                    and makes sure gridItemsPointer is on.
                                 */
    if (element == objectSelected) {
        objectSelected.classList.toggle('dashedLine');
        objectSelected = undefined;
        toggleGridItemsPointer();
    }
    else {
        if (objectSelected != undefined)
            objectSelected.classList.toggle('dashedLine');
        else
            toggleGridItemsPointer();


        objectSelected = element;
        element.classList.toggle('dashedLine');
    }
}


function gridItemPressed(thisGridItem) {

    if (thisGridItem.children[0].src != "")  // If src is in img (children[0]) then there is an item in this grid-item. Item teleports out of grid into its place.
    {
        let myItemArray = document.getElementsByClassName('item');
        for (let i = 0; i < myItemArray.length; i++)
            if (myItemArray[i].children[0].src == thisGridItem.children[0].src) {
                myItemArray[i].children[0].style.visibility = "visible";
                thisGridItem.children[0].style.visibility = "hidden"; // To make it work in safari
                thisGridItem.children[0].removeAttribute('src');
            }
    }
    else if (objectSelected != undefined) // Teleports the selected item into thisGridItem if an object is selected.
    {
        thisGridItem.children[0].src = objectSelected.src;
        thisGridItem.children[0].style.visibility = "visible"; // To make it work in safari
        objectSelected.style.visibility = "hidden";
        objectSelected.classList.toggle('dashedLine');
        objectSelected = undefined;
        toggleGridItemsPointer();
    }
}


function toggleGridItemsPointer() {
    let myGridArray = document.getElementsByClassName('grid-item');
    for (let i = 0; i < myGridArray.length; i++)
        myGridArray[i].classList.toggle("pointer");
}



function hide(element) {
    // let myGridArray = document.getElementsByClassName('grid-item');
    let myGrid = document.getElementById("myGridId");
    if (element.textContent == "Gjem!")
        myGrid.style.display = "None";
    else
        myGrid.style.display = "";


    /*
        if (element.textContent == "Gjem!")
            for (i = 0; i < myGridArray.length; i++)
                myGridArray[i].style.display = "None";
    
        else if (element.textContent == "Vis!")
            for (i = 0; i < myGridArray.length; i++) {
                myGridArray[i].style.display = "";
    
            }
    */
   
    if (element.textContent == "Gjem!")
        element.textContent = "Vis!"
    else
        element.textContent = "Gjem!"


}


/*function reset() {
    let myGridArray = document.getElementsByClassName('grid-item');
    for (let i = 0; i < myGridArray.length; i++){
        if (myGridArray[i].children[0].src != "")
            gridItemPressed(myGridArray[i]);
    }
}
*/

function reset(){
    let tempObject = document.getElementById('myGridId');
    let tempArrayChildren = tempObject.children
    for (let i = 0; i < tempArrayChildren.length; i++)
        if(tempArrayChildren[i].children[0].src != "")
            gridItemPressed(tempObject.children[i]);
}