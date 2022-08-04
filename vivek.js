let bgContainerElement = document.getElementById("cardStyling");

let bgColorsArray = ["#00192a,#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
bgContainerElement.style.backgroundColor = bgColorsArray[0];
console.log(bgContainerElement)

function onChangeBgColor() {
    console.log("rando");
    let lenthOfArray = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * lenthOfArray);
    if (randomColorIndex === lenthOfArray) {
        randomColorIndex = lenthOfArray - 1;

    }

    let randomBgColor = bgColorsArray[randomColorIndex];
    bgContainerElement.style.backgroundColor = randomBgColor;

}
