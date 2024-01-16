console.log("Hello World!");

// function notifyUser() {
//   console.log("notifyUser function was called!");
// }

// function myAwesomeFunction(notifyUserCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   notifyUserCallback();
// }
// myAwesomeFunction(notifyUser);

// function myAwesomeFunction(onCompleteCallBack) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   onCompleteCallBack();
// }
// myAwesomeFunction(function () {
//   console.log("notifyUser function was called!");
// });

// myAwesomeFunction(() => {
//   console.log("notifyUser function was called!");
// });

// function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");

//   const success = Math.random() > 0.5;
//   if (success) {
//     onSuccessCallback({
//       message: "This is the message of success",
//     });
//   } else {
//     onFailureCallback();
//   }
// }

// myAwesomeFunction(
//   (data) => {
//     console.log("It was successful: ", data.message);
//   },
//   () => {
//     console.log("It failed :(");
//   }
// );

// function onAwesomeSuccess(data) {
//   console.log("It was successful: ", data.message);
// }

// function onAwesomeFailure() {
//   console.log("It failed :(");
// }

// myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );
  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result);

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2);

const result3 = myCalculatorFunction(4, 4, subtract);
console.log(result3);

const finalResult = myCalculatorFunction(result, result2, result3, add);
console.log(finalResult);
