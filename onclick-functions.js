// font family input
function onChangeFontFamily(fontFamilyInput){
  let selectedFontValue = fontFamilyInput.value;
  if (activeCell){
    activeCell.style.fontFamily = selectedFontValue;
    activeOptionsState.fontFamily = selectedFontValue;
  }
}
// font size change
function onChangeFontSize(fontSizeInput){
  let inputValue = fontSizeInput.value + "px";
  console.log(inputValue);
  if (activeCell){
    console.log(activeCell.style);
    console.log(activeOptionsState);
    activeCell.style.fontSize = inputValue;
    activeOptionsState.fontSize = inputValue;
  }
}
// bold button
function onClickBold(boldButton) {
  // this function will be triggered when user clicks on the Bold button.
  /*
   * 1. toggle `active-option` class for the button.
   * 2. get the selected cell.
   */
  boldButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isBoldSelected === false) {
      // make the text to bold
      activeCell.style.fontWeight = "600";
    } else {
      // make the text to normal
      activeCell.style.fontWeight = "400";
    }
    // after changing computedStyle, toggle the global activeOptionsState value
    activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
  }
}
// italic button
function onClickItalic(italicButton) {
  /**
   * 1. toggle the active-option class for the italic button.
   */
  italicButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isItalicSelected === false) {
      activeCell.style.fontStyle = "italic";
    } else {
      activeCell.style.fontStyle = "normal";
    }
    // also toggle the value in globally
    activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected;
  }
}
// underline button
function onClickUnderline(underlinedButton) {
  /**
   * 1. toggle the active-option class for the underlined button.
   */
  underlinedButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isUnderLineSelected === false) {
      activeCell.style.textDecoration = "underline";
    } else {
      activeCell.style.textDecoration = "none";
    }
    activeOptionsState.isUnderLineSelected =
      !activeOptionsState.isUnderLineSelected;
  }
}
// text align buttons
function onClickTextAlign(textAlignButton) {
  let selectedValue = textAlignButton.getAttribute("data-value");
  highlightTextAlignButtons(selectedValue);

  // change the text alignment.
  if (activeCell) {
    activeCell.style.textAlign = selectedValue;
    activeOptionsState.textAlign = selectedValue;
  }
}
// text color button
function onChangeTextColor(textColorButton) {
  let selectedColorValue = textColorButton.value;
  if (activeCell) {
    activeCell.style.color = selectedColorValue;
    activeOptionsState.color = selectedColorValue;
  }
}
// background color button
function onChangeBackgroundColor(bgColorButton) {
  let selectedColorValue = bgColorButton.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedColorValue;
    activeOptionsState.backgroundColor = selectedColorValue;
  }
}


sheetCount=2;
function addNewSheet() {
  const sheetsContainer = document.getElementById("sheet-list");
  const sheetButton = document.createElement("button");
  sheetButton.classList.add("button");
  sheetButton.textContent = `Sheet ${sheetCount}`;
  sheetButton.onclick = function () {
    changeSheet(sheetCount);
  };
  sheetsContainer.appendChild(sheetButton);

  sheetCount++;

  createAndAppendRow();
}




function changeSheet(sheetNumber) {
  // Add logic to handle sheet changes
  console.log(`Switching to Sheet ${sheetNumber}`);
}