# Lab-Assignment #3 – Express Basics (Group 15)

**Course:** 25F JavaScript Frameworks – 200  
**Team Members:** Saugat Rana · Kushal Gurung  
**Instructor:** Anmar Jarjees  

This project demonstrates:  
- Express boilerplate in three JS files  
- HTML response at `/`  
- Serving JSON from a local file at `/employees`  
- Basic CRUD demo routes tested with **Postman**  

---

## 📁 Project Structure
Lab3_JS/
├─ package.json
├─ index1.js          # Part 1: HTML at '/'
├─ index2.js          # Part 2: JSON at '/employees'
├─ index3.js          # Part 3: CRUD demo (GET/POST/PUT/DELETE)
├─ data/
│  └─ employees.json  # ≥ 6 objects (sample provided)
└─ README.md

---

## ⚙️ Requirements
- Node.js (v18+ recommended)  
- NPM  
- Postman (for POST/PUT/DELETE)  
- **ES Modules** enabled (`"type": "module"` in `package.json`)  

---

## 🚀 Setup & Run

### 1) Install dependencies
npm install

### 2) Run each part manually
# Part 1: HTML at '/'
npm start index1.js

# Part 2: JSON at '/employees'
npm start index2.js

# Part 3: CRUD demo (use Postman)
npm start index3.js

---

## 🧩 Part 1 – HTML at `/` (index1.js)
Returns a simple HTML page with group names.  

**Route:** GET /  
**Expected:** Browser renders an `<h1>` with “Group 15 Members” and a list of names.  

---

## 🧩 Part 2 – JSON at `/employees` (index2.js)
Serves raw JSON from `data/employees.json` using ESM JSON import:  
import data from './data/employees.json' with { type: 'json' }

**Route:** GET /employees  
**Expected:** Browser shows array of employee objects (raw JSON OK).  

---

## 🧩 Part 3 – CRUD Demo (index3.js)

This file demonstrates the four CRUD-related HTTP methods:  
- GET /get → returns "Learned about get method"  
- POST /post → returns "Learned about post method"  
- PUT /put → returns "Learned about put method"  
- DELETE /delete → returns "Learned about delete method"  

### 🧪 Testing with Postman
- GET → can be tested in browser (http://localhost:3000/get)  
- POST, PUT, DELETE → must be tested in Postman:  
  1. Open Postman and create a new request  
  2. Select the method (POST / PUT / DELETE)  
  3. Enter the URL (e.g., http://localhost:3000/post)  
  4. Click Send  
  5. You should see the plain-text response  

**Screenshots to include in your PDF:**  
- GET /get in Postman  
- POST /post in Postman  
- PUT /put in Postman  
- DELETE /delete in Postman  

---
