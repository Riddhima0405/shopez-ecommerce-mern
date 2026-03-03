# Technical Architecture – ShopEZ (MERN)

## Frontend
- React.js  
- Handles UI like Login, Products, Cart, Orders, Admin Dashboard  
- Communicates with backend using REST APIs (Axios)  

## Backend
- Node.js + Express.js  
- Handles authentication, products, cart, orders  
- Exposes REST APIs  

## Database
- MongoDB  
- Mongoose for schema modeling  
- Stores Users, Products, Cart, Orders  

## Flow
React (Frontend)
      ↓ API calls
Express + Node (Backend)
      ↓
MongoDB (Database)