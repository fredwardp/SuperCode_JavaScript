// function changeHeadline(event) {
//   event.preventDefault();
//   const addClassH1 = document.querySelector("h1");
//   addClassH1.classList.add("heading");
// }

// function resetHeadline(event) {
//   event.preventDefault();
//   const removeClassH1 = document.querySelector("h1");
//   removeClassH1.classList.remove("heading");
// }

function changeHeadline(event) {
  event.preventDefault();
  const switchClassH1 = document.querySelector("h1");
  switchClassH1.classList.toggle("heading");
}
