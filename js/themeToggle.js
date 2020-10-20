const switchBtn = document.querySelector(".switch_1");

switchBtn.addEventListener("click", (event) => {
  if (event.target.checked) {
    document.body.className = "dark-mode";
    localStorage.setItem("mode", "dark");
    document.querySelector("#osmMap canvas").style.filter = "invert(100%)";
  } else {
    localStorage.removeItem("mode");
    document.body.classList = [];
    document.querySelector("#osmMap canvas").style.filter = "";
  }
});

if (localStorage.getItem("mode") === "dark") {
  switchBtn.checked = true;
  document.body.className = "dark-mode";
}
