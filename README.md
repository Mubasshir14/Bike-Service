# 🚴‍♂️ Bike Servicing Management 

# 🌐 Live Backend Link
Check out our [Live Link](https://bike-service-three.vercel.app) 


## Description

The Bike Servicing Management API is a robust backend solution designed for bike servicing centers to streamline the management of customers, bikes, and service records. Built with modern technologies, it supports CRUD operations for all entities and includes specialized endpoints for assigning and completing service jobs. A bonus feature allows fetching pending or overdue services (older than 7 days), and standardized error handling ensures reliability.


## 🛠 Tech Stack
- **Node.js:** JavaScript runtime for scalable backend development.
- **Express.js:** Lightweight framework for building RESTful APIs.
- **TypeScript:** Adds static typing for safer and maintainable code.
- **Prisma ORM:** Simplifies database interactions with PostgreSQL.
- **PostgreSQL:** Reliable relational database for data persistence.


## ⚙️ Setup Guide
Follow these steps to set up and run the project locally:

 ## 📋 Prerequisites

- **Node.js** (version 16 or above)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **GIT** 

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```


- **Start Development Server:**

  ```bash
  yarn dev
  ```
  
- **Set Up the Database**
   -Ensure PostgreSQL is running.

   -Apply Prisma migrations to create the database schema:

  ```bash
  npx prisma migrate dev
  ```

- **Build for Production:**

  ```bash
  npm run build
  ```


## ✨ Key Features
 ### Customer Management

 Create, read, update, and delete customer records.

 ### Endpoints:

- POST /api/customers - Create a new customer

- GET /api/customers - Fetch all customers

- GET /api/customers/:id - Fetch a customer by ID

- PUT /api/customers/:id - Update a customer

- DELETE /api/customers/:id - Delete a customer

### Bike Management

 Add and retrieve bikes linked to customers.

 ### Endpoints:

- POST /api/bikes - Add a new bike

- GET /api/bikes - Fetch all bikes

- GET /api/bikes/:id - Fetch a bike by ID

### Service Management

 Create, retrieve, and complete service records.

 ### Endpoints:

- POST /api/services - Create a service record

- GET /api/services - Fetch all service records

- GET /api/services/:id - Fetch a service record by ID



## Folder Structure
```bash
Bike-Service/
│── .vercel/
│── node_modules/
│── dist/
│── src/
│   ├── app/
|   |   │── modules
│   |   |         ├── Bike
|   |   |         |     |-bike.controller.ts
|   |   |         |     |-bike.service.ts
|   |   |         |     |-bike.route.ts
│   |   |         ├── Service
|   |   |         |     |-service.controller.ts
|   |   |         |     |-service.service.ts
|   |   |         |     |-service.route.ts
│   |   |         ├── Customer
|   |   |         |     |-customer.controller.ts
|   |   |         |     |-customer.service.ts
|   |   |         |     |-customer.route.ts       
|   |   │── middlewares
│   |   |          ├── globalErrorHandlers.ts
│   |   |          ├── validateRequest.ts
│   ├── generated/
│   ├── helpers/
│   ├── shared/
│   │        ├── catchAsync.ts
│   │        ├── sendResponse.ts
│   ├── app.ts
│   │   
│   ├── server.ts
│── .env
│── .gitignore
│── README.md
│── tsconfig.json
│── yarn.lock
```
