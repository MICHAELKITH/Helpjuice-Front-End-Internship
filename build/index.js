const divContainer = document.querySelector(".h1-div-container");
const editorInput = document.getElementById("editor-input");

editorInput.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") return;

  e.preventDefault();
  const value = e.target.value.trim();

  if (!value.startsWith("/")) return;

  const [command, ...textParts] = value.split(" ");
  const headingLevel = command.slice(1); 
  const headingText = textParts.join(" ").trim();

  if (!headingText) return;

  let headingTag;
  if (["1", "2", "3"].includes(headingLevel)) {
    headingTag = `h${headingLevel}`;
  } else {
    return; 
  }

  const containerDiv = createContainerDiv();
  const burgerSvg = createBurgerSvg();
  const heading = createEditableHeading(headingTag, headingText);

  containerDiv.append(burgerSvg, heading);
  divContainer.appendChild(containerDiv);

  e.target.value = "";
});

function createContainerDiv() {
  const containerDiv = document.createElement("div");
  containerDiv.className = "flex items-center gap-3 my-1";
  return containerDiv;
}

function createBurgerSvg() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "w-5 h-5 text-gray-400");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "currentColor");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M4 6h16M4 12h16M4 18h16");

  svg.appendChild(path);
  return svg;
}

function createEditableHeading(tag, text) {
  const heading = document.createElement(tag);
  heading.textContent = text;
  heading.setAttribute("contenteditable", "true");

  switch (tag) {
    case "h1":
      heading.className = "text-4xl font-bold";
      break;
    case "h2":
      heading.className = "text-2xl font-normal";
      break;
    case "h3":
      heading.className = "text-xl font-light";
      break;
  }

  return heading;
}
