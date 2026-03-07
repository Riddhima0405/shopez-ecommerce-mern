# ShopEZ – E-Commerce Web Application (MERN Stack)

## 1. Introduction

E-commerce platforms have significantly changed how people purchase goods and services by allowing users to browse and buy products online conveniently. Modern e-commerce systems require reliable infrastructure that supports secure authentication, efficient product management, and smooth order processing.

This project presents **ShopEZ**, a full-stack e-commerce web application developed using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). The platform allows users to browse products, add items to their cart, and place orders through a responsive interface.

The system also includes an **admin panel** that enables administrators to manage products, categories, and promotional banners while monitoring customer orders.

---

## 2. Problem Statement

Managing an online shopping platform requires handling product catalogs, user accounts, and order transactions efficiently while maintaining data security.

Traditional static websites do not support dynamic features such as cart management, order tracking, and product administration. Without a structured backend system, maintaining product data and handling transactions becomes difficult.

This project aims to build a **full-stack e-commerce platform** where users can browse products, manage carts, and place orders while administrators can manage products and categories efficiently.

---

## 3. Objectives

The primary objective of this project is to develop a **functional e-commerce web application** using the MERN stack.

Key objectives include:

- Designing an interactive interface for browsing products
- Implementing user registration and authentication
- Creating a structured product catalog
- Developing a cart system for managing selected items
- Implementing an order placement and tracking system
- Providing administrative features for managing products and categories
- Ensuring efficient communication between frontend, backend, and database

---

## 4. System Overview

The ShopEZ platform consists of two main modules.

### User Module

Users can:

- Register and log in to the platform
- Browse available products
- Add or remove products from the cart
- Place orders
- View order history in their profile

### Admin Module

Administrators can:

- Manage banner images
- Manage product categories
- Add new products
- Update product information
- Delete products
- Monitor customer orders

---

## 5. User Workflow

The typical workflow of the application is:

1. User Registration
2. User Login
3. Browsing Products
4. Adding Products to Cart
5. Proceeding to Checkout
6. Entering Address and Payment Details
7. Order Confirmation
8. Viewing Orders in Profile Section

---

## 6. Database Design

MongoDB is used as the database to store application data. The system uses several collections.

### Users

Stores information about registered users.

### Admin

Stores administrative data including banner images and category management.

### Products

Stores product details including:

- Name
- Description
- Price
- Discount
- Category
- Stock
- Images

### Cart

Stores products added to a user’s cart.

### Orders

Stores completed order details including:

- Ordered products
- Shipping information
- Payment details
- Order status

---

## 7. System Architecture

The ShopEZ application follows a **three-tier architecture**.

### Presentation Layer

Frontend built using **React.js, HTML, CSS, and JavaScript** that allows users to interact with the application.

### Application Layer

Backend developed using **Node.js and Express.js**, which handles business logic and API requests.

### Data Layer

**MongoDB database** that stores all application data such as users, products, carts, and orders.

---

## 8. Key Features

- Extensive product catalog
- Shopping cart functionality
- Secure checkout system
- Order confirmation and tracking
- Role-based access (User/Admin)
- Data privacy and protection

---

## 9. Technologies Used

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT (JSON Web Tokens)

### Development Tools
- Git
- GitHub
- Nodemon

---

## 10. Project Implementation

The application follows a full-stack architecture where the frontend communicates with backend APIs.

The backend server manages API routes that allow the frontend to:

- Retrieve product data
- Add products to cart
- Place orders
- Authenticate users
- Perform admin operations

These APIs interact with MongoDB through database models defined using Mongoose.

---

## 11. Conclusion

ShopEZ demonstrates the development of a full-stack e-commerce web application using the MERN stack. The system integrates frontend technologies, backend services, and database management to provide a functional online shopping platform.

The project showcases how modern web technologies can be combined to build scalable and efficient digital platforms.

---

## 12. Future Enhancements

Possible improvements include:

- Payment gateway integration
- Product reviews and ratings
- Wishlist feature
- Admin analytics dashboard
- Email notifications for orders

---

## 13. Application Demonstration

Demo Drive Link:

https://drive.google.com/drive/folders/1VKiZ9Y-lwVnbFU_yMowzHvdexDSOPLF7

> Note: The UI has been updated after the demo video. Some screenshots may reflect an earlier version of the interface.