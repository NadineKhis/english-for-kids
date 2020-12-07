// Opens a burger menu
document.getElementById("nav-icon").onclick = function () {
  open()
}
function open() {
  document.getElementById("nav-icon").classList.toggle("open");
  document.getElementById("nav-links").classList.toggle("open");
}

