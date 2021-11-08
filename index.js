const input = document.getElementById("input");
function addingEventListener() {
  alert("I was clicked!");
  input.addEventListener("click", addingEventListener);
}
