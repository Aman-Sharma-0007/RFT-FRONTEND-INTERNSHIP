# 📋 Simple Form — Controlled Components

A React.js project built during the **GOW AI Academy RFT Frontend Internship (Day 4)**.  
This app demonstrates controlled form inputs, basic validation, and theme toggling using Context API and React Router.

---

## 🚀 Tech Stack

- React 18
- Vite
- React Router DOM v6
- Context API
- CSS (no external UI library)

---

## 📁 Folder Structure

```bash
simple-form/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── ThemeContext.jsx
    └── pages/
        ├── Home.jsx
        └── Form.jsx
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Aman-Sharma-0007/RFT-INTERNSHIP-FRONTEND/tree/main/Day-4
cd simple-form
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

in your browser.

---

## ✨ Features

- 📋 Controlled form with Name and Email fields
- ✅ Displays submitted data below the form
- ⚠️ Basic validation — empty fields and invalid email
- 🔒 Submit button disabled until all fields are valid
- 🌙 Light / Dark theme toggle
- 💾 Theme saved in localStorage
- 🌐 React Router DOM navigation

---

## 🧠 Concepts Covered

| Concept | Where Used |
|---|---|
| Controlled inputs | `value` + `onChange` on every input |
| `useState` | Managing form data, errors, submitted state |
| Form validation | `validate()` function in `Form.jsx` |
| Disable submit | `disabled={isDisabled}` on submit button |
| Context API | Sharing theme across all pages |
| `useEffect` | Syncing theme to localStorage |
| React Router DOM | `/` and `/form` routes |

---

## 📸 Pages

- `/` — Home page with link to the form
- `/form` — Form page with name, email, validation, and result display

---

## 📌 Internship Info

- 🏫 GOW AI Academy — RFT Frontend Internship
- 📅 Day 4 Project
- 🔖 Hashtags: `#gowaiacademy #rftinternship`

---

## 👨‍💻 Author

**Aman Sharma**

-Gmail: amanshonak16@gmail.com