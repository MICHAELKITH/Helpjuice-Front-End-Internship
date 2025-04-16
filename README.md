# 📖 Helpjuice Minimal Editor Prototype

A lightweight, Notion-inspired editor that allows free-form typing anywhere on the screen, automatically converting your input into an H1 heading. Built with Tailwind CSS for rapid styling and deployed for easy access.

---

## 🚀 Project Goal

Recreate the design presented in the provided Figma file as a functional, live prototype. This project focuses on simulating a simplified Notion editor experience, specifically implementing only the core `H1` heading component behavior.

> 🧠 Imagine an application where you can click and type anywhere on the canvas, and all entered text is instantly styled as an `H1` heading.

---

## ✨ Key Features

* **Type Anywhere:** Click anywhere on the screen to begin typing.
* **Automatic H1 Styling:** All typed content is automatically rendered as an `H1` heading.
* **Minimalist Design:** Clean and intuitive interface inspired by Notion.
* **Tailwind CSS Powered:** Utilizes Tailwind CSS for efficient and responsive styling.
* **Live Prototype:** Easily accessible via the provided deployment link.

---

## 🛠️ Tech Stack

* **Core:** JavaScript
* **Styling:** Tailwind CSS

---

## 🔗 Demo

🚀 **Live Preview:** [https://helpjuice-front-end-internship.onrender.com/](https://helpjuice-front-end-internship.onrender.com/)

---

## 📦 Installation & Setup

Follow these steps to set up the project locally:

### Prerequisites

* **Node.js** and **npm** (Node Package Manager) installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MICHAELKITH/Helpjuice-Front-End-Internship.git](https://github.com/MICHAELKITH/Helpjuice-Front-End-Internship.git)
    cd Helpjuice-Front-End-Internship
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Tailwind CSS Setup (if you need to modify styles):**

    * **Initialize Tailwind CSS:**
        ```bash
        npx tailwindcss init -p
        ```
        This will create `tailwind.config.js` and `postcss.config.js` files.

    * **Configure Tailwind CSS:**
        Modify your `tailwind.config.js` to include your content paths (e.g., HTML and JavaScript files).

    * **Create your main CSS file (e.g., `css/style.css`)** and add the Tailwind directives:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

    * **Build the CSS:**
        You can either run the PostCSS command directly or add it as an npm script.

        **Direct Command:**
        ```bash
        npx postcss css/style.css -o build/style.css -w
        ```
        (The `-w` flag watches for changes)

        **npm Script:**
        Add the following to your `package.json` under the `scripts` section:
        ```json
        "build:css": "npx postcss css/style.css -o build/style.css --watch"
        ```
        Then run:
        ```bash
        npm run build:css
        ```

4.  **Open `index.html` in your browser** to view the prototype.

---
## ✅ Example usage

Typing `/1 Welcome` creates:

```html
<h1>Welcome</h1>
```

## ✅ Example usage

Typing `/2 This is my project` creates:

```html
<h2>This is my project</h2>
```
## 🤝 Contributing <a name="contributing"></a>

Contributions, bug reports, and feature requests are highly appreciated!

Feel free to open an issue on the [Issues page](https://github.com/MICHAELKITH/Helpjuice-Front-End-Internship/issues) to discuss any improvements or problems you encounter.

For contributing code:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>