# 🏗️ MVC Architecture – ShopEZ Backend

The ShopEZ backend application follows the Model-View-Controller (MVC) architectural pattern.  
MVC is a software design pattern that separates an application into three main layers: Model, View, and Controller. This separation improves maintainability, scalability, and code organization.

---

## 1️⃣ Model Layer (Data Layer)

The Model layer handles all data-related operations.

Responsibilities:
- Define database schemas
- Interact with MongoDB
- Perform CRUD operations (Create, Read, Update, Delete)
- Validate and structure data

In this project, models are implemented using **Mongoose**.

Example:
- User Model
- Product Model
- Cart Model
- Order Model

---

## 2️⃣ Controller Layer

The Controller layer acts as the intermediary between Routes and Models.

Responsibilities:
- Handle incoming HTTP requests
- Process and validate input data
- Call appropriate model functions
- Send structured JSON responses
- Handle errors

Controllers contain the business logic of the application.

---

## 3️⃣ View Layer (Routing Layer)

In a backend REST API, the View is represented by the routing layer.

Responsibilities:
- Define API endpoints
- Map HTTP methods (GET, POST, PUT, DELETE)
- Call corresponding controller functions

Example routes:
- GET /products
- POST /login
- POST /orders
- PUT /cart

---

# ✅ Why MVC is Used in This Project

- Separation of Concerns – Each layer has a specific role.
- Scalability – Easy to add new features.
- Maintainability – Code is clean and organized.
- Reusability – Business logic can be reused.
- Easier Testing – Each layer can be tested independently.

## 📊 MVC Architecture Diagram

```mermaid
flowchart LR
    A[Client / Frontend] -->|HTTP Request| B[Routes (View Layer)]
    B --> C[Controllers]
    C --> D[Models]
    D --> E[(MongoDB Database)]
    E --> D
    D --> C
    C -->|JSON Response| A

1. Client sends request  
2. Routes receive the request  
3. Controllers process the request  
4. Models interact with MongoDB  
5. Response flows back to the client 