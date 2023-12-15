// we manage the options selection

const activeCellElement = document.getElementById("active-cell");
const currentCellInputShowBar = document.getElementById("cell-input-show-bar");
const fontFamilyElement = document.getElementById("font-family");
const fontSizeElement = document.getElementById("font-size");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlinedButton = document.getElementById("underlined");
const textAlignElements = document.getElementsByClassName("text-align");

// activeCell defines which cell is selected / active.
// intially it will null indicating that no cell is selected.
let activeCell = null;

let activeOptionsState;

function toggleButtonsStyle(button, buttonToHighlight) {
  if (buttonToHighlight) {
    // toggle the currently selected cell in the bold/italic/underlined state.
    button.classList.add("active-option");
  } else {
    button.classList.remove("active-option");
  }
}

function highlightOptionButtonsOnFocus() {
  // for font-family
  fontFamilyElement.value = activeOptionsState.fontFamily;
  fontSizeElement.value = activeOptionsState.fontSize.slice(0, -2);

  toggleButtonsStyle(boldButton, activeOptionsState.isBoldSelected);

  toggleButtonsStyle(italicButton, activeOptionsState.isItalicSelected);

  toggleButtonsStyle(underlinedButton, activeOptionsState.isUnderLineSelected);

  // get the textAlign value
  highlightTextAlignButtons(activeOptionsState.textAlign);
  // highlightTextAlignButtons("start" | "right" | "center")
}

// below function will be triggered whenever cell is focused.
function onCellFocus(e) {
  // whenever a cell is focused change the activeCell value to be the id of cell.
  // if (activeCell === true && act-cell.id === e.tar.id also true) then return
  if (activeCell && activeCell.id === e.target.id) {
    // previously selected cell is equal to the currently selected cell.
    return;
  }
  activeCell = e.target;
  activeCellElement.innerText = e.target.id;
  // following line is to show the input for particilar cell
  currentCellInputShowBar.value = e.target.innerText;
  // following listener is to show the value while tying
  activeCell.addEventListener("input", ()=>{
    currentCellInputShowBar.value = activeCell.innerText;
  });
  // intialise the state of this cell.
  const computedStyle = getComputedStyle(activeCell);
  //   console.log(computedStyle.textAlign); // --> checking line

  activeOptionsState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight === "600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderLineSelected: computedStyle.textDecoration.includes("underline"),
    textAlign: computedStyle.textAlign,
    textColor: computedStyle.color,
    backgroundColor: computedStyle.backgroundColor,
    fontSize: computedStyle.fontSize,
  };
  // console.log(activeOptionsState); --> checking
  // by default make a cell left aligned
  textAlignElements[0].classList.add("active-option");

  highlightOptionButtonsOnFocus();
}
/*  the below function task is to take the textAlign value
 *  and decides which alignment button needs to highlighted or not.
 */
function highlightTextAlignButtons(textAlignValue) {
  // textAlignValue === "left" => we have to highlight only left button
  // textAlignValue === "right" => we have to highlight only right button
  // textAlignValue === "center" => we have to highlight only center button
  for (let i = 0; i < textAlignElements.length; i++) {
    if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
      textAlignElements[i].classList.add("active-option");
    } else {
      textAlignElements[i].classList.remove("active-option");
    }
  }
}
// cell-input-show-bar --> display value
currentCellInputShowBar.addEventListener("input", (e)=>{
  activeCell.innerText = e.target.value;
});