# **Frontend - HTML Accessibility Checker - by Emmanuel Paul**

This frontend is built using **React (Vite)** and provides an interface to upload HTML files for accessibility analysis.

---

## **📌 Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

---

## **🚀 Setup Instructions**

### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Start the Server**
```sh
npm run dev
```

### **3️⃣ API Endpoints**

- **Upload HTML File:** `POST http://localhost:3001/api/upload`
- **Expected Response:**

```json
{
  "score": 80,
  "issues": [
    { "description": "Image missing alt attribute.", "element": "<img src='logo.png'>" },
    { "description": "Skipped heading level: Found <h3> after <h1>", "element": "<h3>Main Section</h3>" }
  ]
}
```

---

## **✅ Summary**

| Component                | Command          |
| ------------------------ | ---------------- |
| **Install Dependencies** | `npm install`    |
| **Run Frontend**         | `npm run dev`    |

Your frontend app is now set up and ready to communicate with the backend! 🚀

## ** Sample Screenshots**

https://ibb.co/pvndWBG9
https://ibb.co/Z6BBswNn

