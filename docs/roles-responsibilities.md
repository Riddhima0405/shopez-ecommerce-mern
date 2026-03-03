# Roles and Responsibilities
#  User Roles & Responsibilities

## 1️ User
Represents individuals who are registered on the platform to browse and purchase products.

### Responsibilities:
- Register and log in to the platform  
- Browse the product catalog  
- View product details, pricing, and reviews  
- Add products to the cart  
- Modify or remove items from the cart  
- Place orders  
- Provide shipping and payment details  
- View order history and order details  

---

## 2️ Admin
Represents the administrator responsible for managing the platform content and products.

### Responsibilities:
- Manage banner images displayed on the platform  
- Create and manage product categories  
- Add, update, or remove products  
- Monitor user activity  
- Manage and track orders  
- Ensure smooth functioning of the platform  

---

#  Database Collections

## Users Collection
Stores information about all registered users.

Includes:
- User ID  
- Name  
- Email  
- Password (encrypted)  
- Address details  
- Contact information  

---

## Admin Collection
Stores administrative content and configuration details.

Includes:
- Banner images  
- Product categories  
- Platform management data  

---

## 🛍 Products Collection
Stores all products available on the platform.

Includes:
- Product ID  
- Product name  
- Description  
- Price  
- Discount (if applicable)  
- Category  
- Stock availability  
- Product images  

---

## Cart Collection
Stores products added to the cart by users.

- Linked using User ID  
- Contains selected product IDs  
- Quantity of each product  
- Temporary storage before checkout  

---

##  Orders Collection
Stores all completed orders placed by users.

Includes:
- Order ID  
- User ID  
- List of purchased products  
- Shipping details  
- Payment method  
- Order status  
- Order date  