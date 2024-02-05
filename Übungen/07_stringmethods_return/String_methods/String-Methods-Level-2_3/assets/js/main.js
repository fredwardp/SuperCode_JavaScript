const marker = () => {
  let articleText = document.querySelector("article").innerText;
  const input = document.querySelector("#search-input").value;

  articleText = articleText.replaceAll(input, `<span> ${input} </span>`);
  document.querySelector("article").innerHTML = articleText;
};
