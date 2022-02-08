// 1. Press button, display number to the screen in order from left to right.
// 2. press =, show the total result
// 3. press AC, clear the screen
// 4. pres C, delete the last number / character

const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector("#result");
let textToDisplay = "";
const symbols = ["/", "*", "-", "+"];



buttons.forEach (btn =>{
  btn.addEventListener("click", () => {
    displayElement.style.background ="";
    displayElement.style.color ="";
    const val = btn.innerText;

    // symbole 
    if(textToDisplay.length < 1 && symbols.includes(val))
    return;
    if(symbols.includes(val) && symbols.includes(textToDisplay[textToDisplay.length - 1])){
       textToDisplay= textToDisplay.slice(0,-1) + val;
       return display(textToDisplay);
    }
    //when = clicked
    if(val === "="){
      if(!textToDisplay.length) return;
        if(symbols.includes(textToDisplay[textToDisplay.length-1])){
          textToDisplay = textToDisplay.slice(0, -1);
        }
        return onTotal(); 
       
    }
    
    // Reset display 
    if(val === "AC"){
     resetDisplay();
     return
    } 
    // Erase one character 
    if(val === "C"){
      textToDisplay = textToDisplay.slice(0, -1)
      return display(textToDisplay);
    }
    //remove dot
    if(val === "." && textToDisplay.includes(".") ) return
    textToDisplay = textToDisplay + val;
    display(textToDisplay);
  })
});

// show clicked buttonto the screen
const display = (toDisplay) => {
  
  displayElement.innerText = toDisplay || "0.00";
};

// calculate total value
const onTotal = () =>{
  const randVal = randomNum();
  if(randVal >0 ){
    displayElement.style.background ="Red";
    displayElement.style.color ="white";
    displayElement.classList.add("prank");
    displayElement.addEventListener("animationend", () =>{
      displayElement.classList.remove("prank");
    })
  }
 const total =eval(textToDisplay) + randVal;
 display(total);
 textToDisplay = "";
}

//Reset the display area
const resetDisplay = () =>{
  display("0.00");
  textToDisplay="";
}

// Randsome number
const randomNum = () => {
  const val = Math.floor(Math.random() * 10);
  return val < 6 ? val: 0
};