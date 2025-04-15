# 📖 Helpjuice Front-End Test

A lightweight Notion-like editor that lets you type anywhere on the screen and converts your input into an H1 heading — built using Tailwind CSS and deployed for easy access.

---

## 🚀 Task Overview

Recreate the design outlined in the provided Figma file into a functional, live prototype. The goal is to simulate a minimal Notion editor — specifically focusing only on the `H1` heading component.

> 🧠 Think of it as an app where you can write anywhere and all content is styled like an `H1`.

---

## 🛠️ Tech Stack

- **JavaScript**
- **Tailwind CSS**

---

## 🔗 Demo

👉 [Live Preview (Vercel)]()

---

## 📦 Installation & Setup

### Tailwind CSS Setup

Official Tailwind Docs: [Get Started with Tailwind CSS](https://tailwindcss.com/docs/installation)

```bash
# Initialize your project
npm init -y

# Install Tailwind and PostCSS
npm install -D tailwindcss postcss autoprefixer postcss-cli

# Generate Tailwind config files
npx tailwindcss init -p


# Watch for changes and compile Tailwind CSS
npx  postcss css/style.css -o build/style.css",

# OR via npm scripts
npm run build

