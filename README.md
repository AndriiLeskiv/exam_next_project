# DummyJSON User & Recipe App

This project is a **web application** built using **Next.js** and **React**, allowing users to log in and browse through a collection of users and recipes. The app interacts with the **DummyJSON API**, providing features like **user authentication, searching, pagination, and detailed pages** for both users and recipes.

---

## 📌 Features

✅ **Main Menu:**
- Displays links to pages and a logo for authenticated users.
- If the user is not logged in, only a link to the authentication page is available.

✅ **Search Functionality:**
- Allows searching for users or recipes based on string values or ID.
- This search works across different pages (users or recipes).

✅ **Pagination:**
- Data displayed on all list pages (**users and recipes**) is paginated.
- Prevents overwhelming the user with too much information at once.

---

## 📄 Pages

### 🏠 Home Page (HS)
- Assumes the user is **not logged in** by default.
- Displays a message prompting the user to **authenticate**, along with a link to the authentication page.

### 🔑 Authentication Page (SAP)
- A **login form** that requires a username and password for authentication using the **DummyJSON API**.
- **Login credentials:**
  ```plaintext
  username: 'emilys'
  password: 'emilyspass'
  
### ✅ After Successful Authentication:
- The **main menu** updates to show links to the **recipe** and **user pages**.
- The user’s **profile logo** (from the DummyJSON user object) is displayed.

---

## 👥 User Page
**Displays:**
- 📌 **Main menu**
- 🔍 **Search bar**
- 📋 **List of users** with basic information (**name, age, email**).

**Clicking on a user:**
- 🔎 Redirects to a **detailed page** showing **up to 10 fields**.
- 📖 Displays a **list of their recipes**.
- 🍽 Each recipe is linked to its **own detailed page**.

---

## 🍽 Recipe Page
**Displays:**
- 📌 **Main menu**
- 🔍 **Search bar**
- 📋 **List of recipes** (**title + tags**).

**Clicking on a recipe:**
- 📄 Redirects to a **detailed recipe page** with complete information.
- 🔗 Provides a **link to the user** who created the recipe.

**Clicking on a tag:**
- 🔍 Filters and displays **all recipes** with the same tag.

---

## 🔄 Pagination
- 📑 All list data (**users and recipes**) is **paginated** to improve the user experience.
- 📌 Pagination **splits the data into smaller chunks**, making navigation easier.

---

## ⚡ State Management
This project is built using **Next.js** and **React**, ensuring:
- ⚡ **Efficient rendering**
- 🚀 **Optimized performance**
- 🎯 **Seamless user experience**

---

## 🎨 Design
- The design is kept **simple and functional**.
- There are **no fixed aesthetic requirements**.

---

## 🛠 Setup

### 📥 Installation
Clone the repository:

```bash
git clone https://github.com/AndriiLeskiv/exam_next_project
```

## 🚀 Deployment
The project is **deployed on Vercel** and can be accessed at:

🔗 **https://exam-next-project.vercel.app/**

---

## 👨‍💻 Created by  
**Andrii Leskiv**