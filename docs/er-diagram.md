# ER Diagram – ShopEZ (MERN)

## Entities

### Users
- userId (PK)
- name
- email
- password
- role (customer/admin)

### Products
- productId (PK)
- name
- description
- price
- stock

### Cart
- cartId (PK)
- userId (FK → Users)
- productId (FK → Products)
- quantity

### Orders
- orderId (PK)
- userId (FK → Users)
- productId (FK → Products)
- quantity
- status

## Relationships
- One User can have many Orders  
- One User can have one Cart  
- One Cart can have many Products  
- One Order can include many Products
