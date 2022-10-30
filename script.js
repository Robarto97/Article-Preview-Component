const shareButton = document.getElementById("right");
const tooltips = document.getElementById("tooltips");
const icon = document.getElementById("icon");

shareButton.addEventListener("click", () => {
  tooltips.classList.toggle("show");
  shareButton.classList.toggle("color");
  icon.classList.toggle("color")
});
