# React Quiz App

A simple quiz application built with React + Vite as part of the GOW AI Academy RFT Frontend Internship - Day 10.

## Tech Stack

- React 18
- Vite
- React Router DOM v6

## Features

- One question at a time
- 15 second countdown timer per question
- Score tracking
- Green / red answer feedback
- Auto move on timer end
- Full result summary with correct answers
- Play again button

## Project Structure

```
quiz/
├── public/
│   └── vite.svg
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   └── Result.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Installation

```bash
npm create vite@latest quiz -- --template react
cd quiz
npm install
npm install react-router-dom
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| / | Home | Welcome screen with start button |
| /quiz | Quiz | Questions with timer and score |
| /result | Result | Final score and answer summary |

## Concepts Used

- Multi-step UI
- State management with useState
- Side effects with useEffect
- React Router DOM (BrowserRouter, Routes, Route, useNavigate, useLocation)
- Props and state passing between routes

## Author
 **Aman Sharma**

 -Gmail: amanshonak16@gmail.com

#`rftInternship` #`React.js` 