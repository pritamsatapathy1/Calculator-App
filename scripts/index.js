// Calculator App Logics(JS)

// ? Global Variables
let isCalculated = false;

// ? Required: 'DOM' Elements;
const inputData = document.getElementById("input-data");
const finalResult = document.getElementById("final-result");
const numBtns = document.querySelectorAll("button.num");
const percBtn = document.getElementById("perc");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("min");
const devBtn = document.getElementById("dev");
const mulBtn = document.getElementById("mul");
const calculateBtn = document.getElementById("equals");
const delBtn = document.getElementById("del");
const clearBtn = document.getElementById("clear");

// ? Method: To Delete End Number of A Number
const removeEndNum = (num) => {
  let newNum = num.split("");
  newNum.pop();
  newNum = newNum.join("");
  return newNum;
};

// ? Method: To check the Number is a 'Floating' Number or 'Not'
const isDataType = (number) => {
  const numArr = String(number).split(".");
  let data_type = null;
  if (numArr.length > 1) {
    data_type = "float";
    // ! If The Given number is a Floating Number It Will Return 'float'
    return data_type;
  }
  data_type = "number";
    // ! If The Given number is not a Floating Number It Will Return 'number'
  return data_type;
};

// * Added onClick Function For Each Number Buttons
numBtns.forEach((num) => {
  num.addEventListener("click", () => {
    inputData.innerText += num.innerText;
    finalResult.innerText = "";
    isCalculated = false;
  });
});

// * Added onClick Function For 'Percentange(%)' Button
percBtn.addEventListener("click", () => {
  inputData.innerText += `${finalResult.innerText}%`;
  finalResult.innerText = "";
  isCalculated = false;
});

// * Added onClick Function For 'ADDITION(+)' Operator Button
plusBtn.addEventListener("click", () => {
  inputData.innerText += `${finalResult.innerText}+`;
  finalResult.innerText = "";
  isCalculated = false;
});

// * Added onClick Function For 'SUBTRACTION(-)' Operator Button
minusBtn.addEventListener("click", () => {
  inputData.innerText += `${finalResult.innerText}-`;
  finalResult.innerText = "";
  isCalculated = false;
});

// * Added onClick Function For 'DEVISION(/)' Operator Button
devBtn.addEventListener("click", () => {
  inputData.innerText += `${finalResult.innerText}/`;
  finalResult.innerText = "";
  isCalculated = false;
});

// * Added onClick Function For 'MULTIPLICATION(*)' Operator Button
mulBtn.addEventListener("click", () => {
  inputData.innerText += `${finalResult.innerText}*`;
  finalResult.innerText = "";
  isCalculated = false;
});

// * Added onClick Function For 'CALCULATE OR EQUAL(=)' Action Button
calculateBtn.addEventListener("click", () => {
  // ! This Condition Added To Stop getting the 'Undefined' message after clicking multiple times on 'EQUAL' Button.
  if (isCalculated) {
    finalResult.innerText = finalResult.innerText;
    return;
  }

  const calculatedResult = eval(inputData.innerText); // * Calculated Result stored in it for Re-Usability.

  // ! This Condition will Identify the Floating Number and Return it as Floating number but it will reduce the length.
  // ? Ex: Original Floating Num : 53.677889080 
  // ? Ex: Returned Floating Num : 53.677 
  if (isDataType(calculatedResult) === "number") {
    finalResult.innerText = calculatedResult;
  } else {
    finalResult.innerText = calculatedResult.toFixed(3);
  }
  inputData.innerText = "";
  isCalculated = true;
});

// * Added onClick Function For 'DELETE(X)' Action Button
delBtn.addEventListener("click", () => {
  finalResult.innerText = removeEndNum(finalResult.innerText);
  inputData.innerText = removeEndNum(inputData.innerText);
});

// * Added onClick Function For 'CLEAR( )' Action Button
clearBtn.addEventListener("click", () => {
  inputData.innerText = "";
  finalResult.innerText = "";
});

