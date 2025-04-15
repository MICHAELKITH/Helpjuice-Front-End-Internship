const divContainer = document.querySelector(".h1-div-container");
const editorInput = document.getElementById("editor-input");

editorInput.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") return;

  e.preventDefault();
  const value = e.target.value.trim();

  if (!value) return;

  const containerDiv = createContainerDiv();
  const burgerSvg = createBurgerSvg();
  const h1 = createEditableH1(value);

  containerDiv.append(burgerSvg, h1);
  divContainer.appendChild(containerDiv);

  e.target.value = "";
});

function createContainerDiv() {
  const containerDiv = document.createElement("div");
  containerDiv.className = "flex items-center gap-3 my-1";
  return containerDiv;
}

function createBurgerSvg() {
  const burgerSvg = document.createElement("div");
  burgerSvg.className = "w-5 -translate-y-1.5";
  burgerSvg.innerHTML = `
    <svg class="text-input-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  `;
  return burgerSvg;
}

function createEditableH1(value) {
  const h1 = document.createElement("h1");
  h1.className = "text-3xl font-bold capitalize";
  h1.contentEditable = true;
  h1.style.border = "none";
  h1.style.outline = "none";
  h1.innerText = value;

  h1.addEventListener("keydown", (e) => handleH1Keydown(e));
  return h1;
}

function handleH1Keydown(e) {
  if (e.key !== "Enter") return;

  e.preventDefault();
  moveCursorToEnd(e.target);
  editorInput.focus();
}

function moveCursorToEnd(element) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}