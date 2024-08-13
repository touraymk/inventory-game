
let objectSelected;


function objectPressed(element) {
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

    if (thisGridItem.children[0].src != "") {
        let myItemArray = document.getElementsByClassName('item');
        for (i = 0; i < myItemArray.length; i++)
            if (myItemArray[i].children[0].src == thisGridItem.children[0].src) {
                myItemArray[i].children[0].style.visibility = "visible";
                thisGridItem.children[0].src = "";
                thisGridItem.children[0].removeAttribute('src');
            }
    }
    else if (objectSelected != undefined) {
        thisGridItem.children[0].src = objectSelected.src;
        objectSelected.style.visibility = "hidden";
        objectSelected.classList.toggle('dashedLine');
        objectSelected = undefined;
        toggleGridItemsPointer();
    }
}


function toggleGridItemsPointer() {
    let myGridArray = document.getElementsByClassName('grid-item');
    for (i = 0; i < myGridArray.length; i++)
        myGridArray[i].classList.toggle("pointer");
}
