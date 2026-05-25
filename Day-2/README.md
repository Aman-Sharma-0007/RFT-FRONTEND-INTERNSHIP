# 👤 User Profile Cards — Day 2

> React.js Internship Project | GOW AI Academy  
> **Concepts:** Props • Component Reuse • Conditional Rendering • React Router DOM

---

# 📸 Project Overview

A multi-page React application that displays user profile cards with navigation, follow functionality, and individual profile detail pages.

---

# 📁 Folder Structure

```bash
user-profile-cards/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── UserCard.js
│   ├── data/
│   │   └── users.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ProfileDetail.js
│   │   └── About.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

---

# 🚀 Getting Started

## 1. Create React App

```bash
npx create-react-app user-profile-cards

cd user-profile-cards
```

---

## 2. Install React Router DOM

```bash
npm install react-router-dom
```

---

## 3. Replace Files with Project Code

---

## 4. Start the App

```bash
npm start
```

App runs at:

```bash
http://localhost:3000
```

---

# 📄 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Grid of all user profile cards |
| `/profile/:id` | ProfileDetail | Full detail page for one user |
| `/about` | About | Project info and concepts covered |

---

# 🧠 Concepts Covered

---

## ✅ Props

Data is passed from parent to child component:

```js
// Parent (Home.js)
<UserCard
  id={user.id}
  name={user.name}
  age={user.age}
  role={user.role}
  image={user.image}
  isOnline={user.isOnline}
/>
```

```js
// Child (UserCard.js)
function UserCard({ id, name, age, role, image, isOnline }) {
  return <div>{name}</div>;
}
```

---

## ✅ Component Reuse

One `UserCard` component is reused multiple times using `.map()`:

```js
{users.map((user) => (
  <UserCard key={user.id} {...user} />
))}
```

---

## ✅ Conditional Rendering

Online / Offline badge:

```js
<div className={`status-badge ${isOnline ? "online" : "offline"}`}>
  {isOnline ? "🟢 Online" : "🔴 Offline"}
</div>
```

---

## ✅ useState — Follow Button

```js
const [following, setFollowing] = useState(false);

<button onClick={() => setFollowing(prev => !prev)}>
  {following ? "✔ Following" : "+ Follow"}
</button>
```

---

## ✅ React Router DOM

### App.js — Define Routes

```js
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile/:id" element={<ProfileDetail />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

### useNavigate — Navigate to Detail Page

```js
const navigate = useNavigate();

navigate(`/profile/${id}`);
```

---

### useParams — Read URL Params

```js
const { id } = useParams();
```

---

### NavLink — Active Link Highlighting

```js
<NavLink
  to="/"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Home
</NavLink>
```

---

# ⚙️ Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18.2.0 | Core library |
| react-dom | ^18.2.0 | DOM rendering |
| react-router-dom | ^6.22.0 | Client-side routing |
| react-scripts | 5.0.1 | CRA build tooling |

---

# 🌟 Features

- ✅ Reusable `UserCard` component using props
- ✅ 6 user profiles rendered dynamically
- ✅ Online / Offline conditional badge
- ✅ Follow / Unfollow toggle button
- ✅ Card click navigation to profile page
- ✅ Active route highlighting with `NavLink`
- ✅ Responsive grid layout

---

# 👨‍💻 Author

**Aman Sharma**

- Gmail: amanshonak16@gmail.com

---

# 🏷️ Tags

```txt
#gowaiacademy
#rftinternship
#reactjs
#props
#react-router-dom
#day2
```

---