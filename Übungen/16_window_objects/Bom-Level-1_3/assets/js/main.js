let btn = document.querySelector("button");
let divElement = document.querySelector("div");

console.log(window);

btn.addEventListener("click", () => {
  divElement.innerHTML = `<p> Browsername:
    ${window.navigator.appName} </p>
    <p> Betriebssystem:
    ${window.navigator.platform} </p>
    <p> Browser Version:
    ${window.navigator.appVersion} </p>
    <p> Innere Breite:
    ${window.innerWidth} </p>
    <p> Innenhöhe:
    ${window.innerHeight} </p>
    <p> Color Depth:
    ${window.screen.colorDepth} </p>
    <p> Pixel Depth:
    ${window.screen.pixelDepth} </p>
    `;
});
