let inputBtn = document.getElementById("input-btn")

function click() {
  console.log("Button clicked from addEventListener")
}
inputBtn.addEventListener("click", click)

// original code for the add event listener

// inputBtn.addEventListener("click", function () {
//     console.log("Button clicked from addEventListener")
// })
