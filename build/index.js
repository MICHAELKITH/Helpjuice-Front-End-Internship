const divContainer = document.querySelector(".h1-div-container");
const editorInput = document.getElementById("editor-input");

if (!divContainer || !editorInput) {
  console.warn("Required DOM elements not found.");
} else {
  // Create suggestion box
  const suggestionBox = document.createElement("div");
  suggestionBox.id = "block-suggestions";
  suggestionBox.className = "absolute bg-white  rounded shadow-md p-2 mt-1 hidden w-64 text-sm z-50";

  const suggestionOptions = [
    { level: "1", label: "Heading 1" },
    { level: "2", label: "Heading 2" },
    { level: "3", label: "Heading 3" }
  ];

  suggestionOptions.forEach(({ level, label }) => {
    const option = document.createElement("div");
    option.className = "block-option py-1 px-2 hover:bg-gray-100 cursor-pointer";
    option.dataset.level = level;
    option.innerHTML = `<strong>${label}</strong> <span class="text-gray-500 text-xs ml-2">Shortcut: /${level}</span>`;
    suggestionBox.appendChild(option);
  });

  document.body.appendChild(suggestionBox);

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
    suggestionBox.classList.add("hidden");
  });

  editorInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    if (value.startsWith("/")) {
      suggestionBox.classList.remove("hidden");

      const rect = editorInput.getBoundingClientRect();
      suggestionBox.style.top = `${rect.bottom + window.scrollY}px`;
      suggestionBox.style.left = `${rect.left + window.scrollX}px`;

      const keyword = value.slice(1).toLowerCase();
      Array.from(suggestionBox.children).forEach(child => {
        child.style.display = child.textContent.toLowerCase().includes(keyword) ? "block" : "none";
      });
    } else {
      suggestionBox.classList.add("hidden");
    }
  });

  suggestionBox.addEventListener("click", (e) => {
    const option = e.target.closest(".block-option");
    const level = option?.getAttribute("data-level");
    if (!level) return;

    editorInput.value = `/${level} `;
    suggestionBox.classList.add("hidden");
    editorInput.focus();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      suggestionBox.classList.add("hidden");
    }
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
}