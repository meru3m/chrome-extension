let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", click)

function click() {
  console.log("Button clicked from addEventListener")
}

// original code for the add event listener

// inputBtn.addEventListener("click", function () {
//     console.log("Button clicked from addEventListener")
// })
