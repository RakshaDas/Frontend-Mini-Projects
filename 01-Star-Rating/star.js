const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for (x = 0; x < stars.length; x++) {
  stars[x].starValue = x + 1;

  ["click", "mouseover", "mouseout"].forEach(function (e) {
    stars[x].addEventListener(e, showRating);
  });
}
function showRating(e) {
  let type = e.type;
  let starValue = this.starValue;

  if (type === "click") {
    if (starValue >= 1) {
      output.innerHTML = "You Rated this " + starValue + " Stars";
    }
  }

  stars.forEach(function (ele, index) {
    if (type === "click") {
      if (index < starValue) {
        ele.classList.add("orange");
      } else {
        ele.classList.remove("orange");
      }
    }

    if (type === "mouseover") {
      if (index < starValue) {
        ele.classList.add("yellow");
      } else {
        ele.classList.remove("yellow");
      }
    }
    if (type === "mouseout") {
      ele.classList.remove("yellow");
    }
  });
}

function nextPage() {
  window.location.reload();
}
