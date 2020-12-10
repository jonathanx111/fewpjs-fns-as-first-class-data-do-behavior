/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let t = parseInt(timeString.split(':')[0])
  if (t < 12) {
    return "Good Morning"
  } else if (t >= 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg
}
/* Write your implementation of displayMessage() */
