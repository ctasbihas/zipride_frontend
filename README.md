# 🚖 ZipRide – Ride Management System (Frontend)

## Project Overview

ZipRide is a production-grade, fully responsive, and role-based ride booking platform inspired by Uber and Pathao. Built with React, Redux Toolkit, and RTK Query, it delivers tailored experiences for Riders, Drivers, and Admins, ensuring a polished, intuitive, and consistent UI/UX across all devices.

---

## 🚀 Live Deployment

-   **Frontend:** [https://zipride.vercel.app](https://zipride.vercel.app)
-   **Backend:** [https://zipridebackend.vercel.app](https://zipridebackend.vercel.app)

---

## 📚 Table of Contents

-   [Tech Stack](#tech-stack)
-   [Features](#features)
-   [Role-Based Dashboards](#role-based-dashboards)
-   [Public Pages](#public-pages)
-   [Authentication & Authorization](#authentication--authorization)
-   [UI/UX Enhancements](#uiux-enhancements)
-   [Error Handling](#error-handling)
-   [Setup Instructions](#setup-instructions)
-   [Demo Credentials](#demo-credentials)
-   [Demo Video](#demo-video)

---

## 🛠️ Tech Stack

-   **Frontend:** React, TypeScript, Redux Toolkit, RTK Query, React Router
-   **Styling:** Tailwind CSS
-   **State Management:** Redux Toolkit, RTK Query
-   **API:** Axios (optional)
-   **Visualization:** recharts, react-chartjs-2
-   **Notifications:** react-hot-toast
-   **Backend:** Node.js, Express, MongoDB, JWT, bcrypt

---

## ✨ Features

### 1️⃣ Responsive Design & Visual Consistency

-   Fully responsive for mobile, tablet, and desktop
-   Consistent typography, spacing, and color palette
-   Sticky navigation bar (6+ menu options, dropdowns)
-   Themed footer with functional links
-   Lazy-loading, skeleton loaders, and accessibility compliance
-   Realistic data throughout

### 2️⃣ Public Landing Pages

-   **Home:** 5+ sections (Hero, How-it-works, Highlights, Testimonials, CTA, etc.)
-   **About Us:** Company background, mission, team
-   **Features:** Detailed breakdown for Rider, Driver, Admin
-   **Contact:** Validated inquiry form
-   **FAQ:** Searchable common questions

### 3️⃣ Authentication & Authorization

-   JWT-based login/registration with role selection (Rider, Driver, Admin)
-   Persistent authentication, role-based landing
-   Blocked/suspended users redirected to status page
-   Offline drivers see notice instead of ride requests
-   Logout functionality

### 4️⃣ Rider Features

-   Ride request form (pickup, destination, fare estimate, payment)
-   Live ride tracking (optional map)
-   Ride history (pagination, search, filters)
-   Ride details (route, timestamps, driver info, status timeline)
-   Profile management (edit info, change password)

### 5️⃣ Driver Features

-   Online/Offline toggle
-   Incoming ride requests (accept/reject)
-   Active ride management (status updates)
-   Earnings dashboard (charts: daily, weekly, monthly)
-   Ride history (pagination, filters)
-   Profile management (vehicle, contact, password)

### 6️⃣ Admin Features

-   User management (search, filter, block/unblock, approve/suspend)
-   Ride oversight (advanced filtering)
-   Analytics dashboard (ride volume, revenue, driver activity)
-   Consistent search/filter tools
-   Profile management

### 7️⃣ General UI/UX Enhancements

-   Role-based navigation, profile dropdown
-   Interactive carousels, ride cards, responsive charts
-   Skeletons, smooth transitions, global error handling
-   Accessibility and semantic HTML
-   Lazy-loading for heavy assets
-   Dynamic data visualization (cards, bar/pie charts, tables)
-   **Emergency/SOS Button:**
    -   Floating button on active ride screens
    -   Options: Call Police, Notify Emergency Contact, Share Live Location
    -   Pre-set/editable emergency contacts
    -   Live location sharing via tel/SMS/WhatsApp
    -   Visual feedback for actions
    -   Only visible during active rides

### 8️⃣ Strict Error Handling

-   All forms: validation and user-friendly error messages
-   Clear API/network/validation/unauthorized error handling
-   Toasts for success/error (react-hot-toast)
-   No broken links or non-functional buttons

---

## 🧑‍💻 Role-Based Dashboards

-   **Rider:** Book rides, track rides, view history, manage profile
-   **Driver:** Toggle availability, manage rides, view earnings, history, profile
-   **Admin:** Manage users/rides, analytics, profile

---

## 🌐 Public Pages

-   `/` – Home
-   `/about` – About Us
-   `/features` – Features
-   `/contact` – Contact
-   `/faq` – FAQ

---

## 🔐 Authentication & Authorization

-   `/auth/login` – Login (role-based)
-   `/auth/register` – Register (role selection)
-   Blocked/suspended users redirected to `/error/block`
-   Persistent login, role-based redirects

---

## 🎨 UI/UX Enhancements

-   Sticky navbar, themed footer
-   Responsive cards, charts, tables
-   Skeleton loaders, smooth transitions
-   Accessibility: keyboard navigation, ARIA labels

---

## ⚠️ Error Handling

-   All forms: required fields, invalid input, password mismatch
-   API/network errors: clear, actionable messages
-   Unauthorized actions: user-friendly feedback
-   Toasts for all success/error states

---

## 🛠️ Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ctasbihas/zipride_frontend.git
    cd zipride_frontend
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Configure environment variables:**
    - See `.env.example` for required variables (API base URL, etc.)
4. **Run the development server:**
    ```bash
    npm run dev
    ```
5. **Build for production:**
    ```bash
    npm run build
    ```
6. **Start production server:**
    ```bash
    npm run preview
    ```

---

## 🧪 Demo Credentials

| Role   | Email              | Password  |
| ------ | ------------------ | --------- |
| Admin  | admin@zipride.com  | admin123  |
| Driver | driver@zipride.com | driver123 |
| Rider  | rider@zipride.com  | rider123  |

---

## 🎥 Demo Video

-   [Demo Walkthrough (YouTube)](https://youtu.be/your-demo-link)
    -   Registration & login (all roles)
    -   Rider booking & live tracking
    -   Driver ride acceptance & completion
    -   Admin/user/ride management

---

## 📄 Additional Notes

-   Clean, modular codebase following best practices
-   Minimum 10 meaningful commits (see commit history)
-   Separate frontend/backend repos
-   All features tested and production-ready

---

## 👨‍💻 Author

-   [Your Name](https://github.com/ctasbihas)

---

For any issues or feature requests, please open an issue on the repository.
