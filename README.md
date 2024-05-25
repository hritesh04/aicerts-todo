# Aicerts-Todo

This project consists of a React frontend using Vite and a Node.js backend with Express, both containerized using Docker and Docker Compose. The backend connects to a Redis instance.

## Prerequisites

Make sure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup Instructions

This product can either be setup manually or through docker

[Manual Setup Instructions](#manual-setup-instructions)  
[Docker Setup Instructions](#docker-setup-instructions)

## Docker Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone git@github.com:hritesh04/aicerts-todo.git
   cd aicerts-todo
   ```

2. **Create a .env File**

   Create a .env file in the root directory of the project and add the following environment variables:

   ```sh
   BACKEND_PORT=3000 #can be any other free port in your system
   BACKEND_URL=http://localhost:$BACKEND_PORT
   ```

   or you can simply rename the existing .env.example file to .env

   ```sh
   cp .env.example .env
   ```

3. **Run Docker Compose**

   Make sure Docker is running on your system, then start the Docker containers defined in the docker-compose.yml file using the following command :

   ```sh
   docker-compose up
   ```

   This command will build the Docker images for the frontend and backend, start the containers, and expose the frontend on port 5173 and the backend on port 3000.

4. **Access the Applications**
   - React App: http://localhost:5173
   - Backend API: http://localhost:3000

## Manual Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone git@github.com:hritesh04/aicerts-todo.git
   cd aicerts-todo
   ```

2. **Create a .env File**

   Create a .env file in the root directory of the project and add the following environment variables:

   ```sh
   BACKEND_PORT=3000 #can be any other free port in your system
   BACKEND_URL=http://localhost:$BACKEND_PORT
   ```

   or you can simply rename the existing .env.example file to .env

   ```sh
   cp .env.example .env
   ```

3. **Install dependencies**

   You need to install dependencies for both server and react application.

   ```sh
   npm install
   cd server
   npm install
   ```

   These commands will install all the dependencies of the application

4. **Build and run the Backend**

   Next we build and start the backend server

   ```sh
   npm run build
   npm run start
   ```

   These commands will build and run the backend.

5. **Run the frontend**

   After this we go to the root directory and run the react application

   ```sh
   cd ..
   npm run start
   ```

6. **Access the Applications**
   - React App: http://localhost:5173
   - Backend API: http://localhost:3000
