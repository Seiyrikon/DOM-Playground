let initializeLoadedContent = function initializeLoadedContentHandler() {
    //gets the elements in the DOM using getElementById function
    const main = document.querySelector('main');
    const body = document.getElementById("body");
    const randomColorButton = document.getElementById("random-color-button");
    const inputColorButton = document.getElementById("input-color-button");
    const flexContainer = document.getElementById("flex-me");
    const toggleFlex = document.getElementById("flex-it");
    const toggleFlexDirection = document.getElementById("flex-direction-toggle");
    const toggleMode = document.getElementById("mode-button");

    randomColorButton.addEventListener("click", function () {
        //gets a random color on the colorArray using the getRandomNumber function
        //both the colorArray and getRandomNumber function can be found on utils.js
        const colors = domPlaygroundUtilities.colorArray;
        const colorsLength = colors.length - 1;
        const randomNumber = domPlaygroundUtilities.getRandomNumber(0, colorsLength);
        let newColor = colors[randomNumber];


        //prevents the body to have it's current color as new color
        if (body.style.color !== newColor) {
            body.style.color = newColor;
        } else {
            while (body.style.color === newColor) {
                newColor = domPlaygroundUtilities.colorArray[domPlaygroundUtilities.getRandomNumber(0, colorArray.length - 1)];
                body.style.color = newColor;
            }
        }
    })

    inputColorButton.addEventListener("click", function () {
        //prompts the user to input a color and sets that color as the new text color of the body
        let textColor = window.prompt("Enter a color");
        body.style.color = textColor;
    });

    toggleFlex.addEventListener("click", function () {
        //removes flex-container and column class if it exist of flexContainer
        //makes flex direction button to be displayed
        //both classes are found in style.css
        if (flexContainer.classList.contains("flex-container")) {
            flexContainer.classList.remove("flex-container");
            flexContainer.classList.remove("column");
            toggleFlexDirection.classList.add("d-none");
            toggleFlex.textContent = "Flex it!"

            //adds flex-conatiner class it the button is clicked again
            //makes flex direction button to be hidden
            //makes the Unflex button to be displayed
        } else {
            flexContainer.classList.add("flex-container");
            toggleFlexDirection.classList.remove("d-none");
            toggleFlex.textContent = "Unflex it!"
        }
    });

    toggleFlexDirection.addEventListener("click", function () {

        //adds column class on flexContainer if it doesn't exist
        //column class can be found in style.css
        //updates the textContent of flex direction button to Row
        if (!flexContainer.classList.contains("column")) {
            flexContainer.classList.add("column")
            toggleFlexDirection.textContent = "Row";

        } else {
            //removes the column class on the flexContainer
            //updates the textContent of flex direction button to Column
            flexContainer.classList.remove("column")
            toggleFlexDirection.textContent = "Column";
        }
    });

    toggleMode.addEventListener("click", function () {
        //removes the dark-mode class on the body element
        //updates the textContent of toggleMode button to Dark Mode
        //dark-mode class can be found on style.css
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.style.color = "black"
            toggleMode.textContent = "Dark Mode"
        } else {
            //adds the dark-mode class on the body element
            //updates the textContent of toggleMode button to Light Mode
            body.classList.add("dark-mode");
            body.style.color = "white"
            toggleMode.textContent = "Light Mode"
        }
    });


}