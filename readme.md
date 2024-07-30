# Noter 

**Noter** is a scalable, and secure Node.js application for managing notes. Built with TypeScript, Express, and MongoDB, Noter provides a robust API for creating, retrieving, updating, and deleting notes. The project is designed with a modular architecture and includes comprehensive API documentation.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
   - [Running the Application](#running-the-application)
   - [Running with Docker](#running-with-docker)
5. [API Documentation](#api-documentation)
   - [Endpoints](#endpoints)
6. [Folder Structure](#folder-structure)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

## Project Overview

Noter is a notes management application built to demonstrate best practices in backend development using Node.js. It supports CRUD operations for notes and features secure authentication and comprehensive API documentation.

## Features

- **CRUD Operations**: Create, read, update, and delete notes.
- **Authentication**: Secure endpoints with JWT authentication.
- **API Documentation**: Automatically generated Swagger documentation.
- **Environment Configuration**: Support for multiple environments (development, staging, production).
- **Modular Architecture**: Organized into controllers, services, and routes.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing notes.
- **Mongoose**: ODM for MongoDB to manage data.
- **Swagger**: API documentation using `swagger-ui-express` and `swagger-jsdoc`.
- **Docker**: Containerization for consistent environment setup.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed. [Download Node.js](https://nodejs.org/)
- **Docker** (optional): For containerization. [Install Docker](https://docs.docker.com/get-docker/)
- **MongoDB**: Ensure MongoDB is running or use MongoDB Atlas.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/10ishq/noter.git
   cd noter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory with the following content. Adjust these variables as needed:

```env
PORT=3000
MONGO_URI=mongodb+srv://10ishq:ih94ZfkMbjr2zryE@sandbox-cluster.vklwodd.mongodb.net/dev
BEARER_TOKEN=mGvwy6P7pE2SNN6iaExpKjIGBGUfZpLW
```

### Running the Application

1. **Development**: To start the application in development mode, use:

   ```bash
   npm run start:dev
   ```

2. **Staging**: To start the application in staging mode, first build it and then run:

   ```bash
   npm run start:staging
   ```

3. **Production**: To start the application in production mode, first build it and then run:

   ```bash
   npm run start:prod
   ```

   The application will be running at `http://localhost:3000`.

### Running with Docker

To build and run the application using Docker:

1. **Build and Run**:

   ```bash
   docker-compose up --build
   ```

   This will build the Docker image and start the container. The application will be accessible at `http://localhost:3000`.

## API Documentation

The API documentation is available at `/api/docs`. It provides details on the endpoints, request and response formats, and example requests.

### Endpoints

#### Create a New Note

- **Endpoint**: `POST /notes`
- **Summary**: Create a new note.
- **Request Body**:
  ```json
  {
    "title": "Meeting Notes",
    "content": "Discussed the project milestones and deadlines.",
    "userID": "60c72b2f4f1a2c001c8a8a8b"
  }
  ```
- **Responses**:
  - `201 Created`: Note created successfully.
  - `500 Internal Server Error`: Server error.

#### Get All Notes

- **Endpoint**: `GET /notes`
- **Summary**: Retrieve a list of all notes.
- **Responses**:
  - `200 OK`: List of notes.
  - `500 Internal Server Error`: Server error.

#### Get a Note by ID

- **Endpoint**: `GET /notes/{id}`
- **Summary**: Retrieve a note by its ID.
- **Parameters**:
  - `id` (path parameter): The ID of the note to retrieve.
- **Responses**:
  - `200 OK`: Note found.
  - `404 Not Found`: Note not found.
  - `500 Internal Server Error`: Server error.

#### Update a Note by ID

- **Endpoint**: `PUT /notes/{id}`
- **Summary**: Update a note by its ID.
- **Parameters**:
  - `id` (path parameter): The ID of the note to update.
- **Request Body**:
  ```json
  {
    "title": "Updated Meeting Notes",
    "content": "Updated content of the meeting notes.",
    "userID": "60c72b2f4f1a2c001c8a8a8b"
  }
  ```
- **Responses**:
  - `200 OK`: Note updated successfully.
  - `404 Not Found`: Note not found.
  - `500 Internal Server Error`: Server error.

#### Delete a Note by ID

- **Endpoint**: `DELETE /notes/{id}`
- **Summary**: Delete a note by its ID.
- **Parameters**:
  - `id` (path parameter): The ID of the note to delete.
- **Responses**:
  - `200 OK`: Note deleted successfully.
  - `404 Not Found`: Note not found.
  - `500 Internal Server Error`: Server error.


## Folder Structure

```plaintext
/:
│   .env.dev
│   .env.prod
│   .env.staging
│   .gitignore
│   docker-compose.yaml
│   Dockerfile
│   package-lock.json
│   package.json
│   tsconfig.json
│   
├───dist
│   │   app.js
│   │   server.js
│   │   swagger.js
│   │   
│   ├───notes
│   │   ├───controllers
│   │   │       note.controller.js
│   │   │
│   │   ├───dtos
│   │   │   └───note
│   │   │           note.dto.js
│   │   │
│   │   ├───routes
│   │   │       note.route.js
│   │   │
│   │   ├───schemas
│   │   │       note.schema.js
│   │   │
│   │   └───services
│   │           note.service.js
│   │
│   └───utils
│       └───middlewares
│               auth.middleware.js
│
├───src
│   │   app.ts
│   │   server.ts
│   │   swagger.ts
│   │
│   ├───notes
│   │   ├───controllers
│   │   │       note.controller.ts
│   │   │
│   │   ├───dtos
│   │   │   └───note
│   │  

 │           note.dto.ts
│   │   │
│   │   ├───routes
│   │   │       note.route.ts
│   │   │
│   │   ├───schemas
│   │   │       note.schema.ts
│   │   │
│   │   └───services
│   │           note.service.ts
│   │
│   └───utils
│       └───middlewares
│               auth.middleware.ts
│
└───swagger
        notes.swagger.json
```
