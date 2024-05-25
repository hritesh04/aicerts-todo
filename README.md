# Project Name

This project consists of a React frontend using Vite and a Node.js backend with Express, both containerized using Docker and Docker Compose. The backend connects to a Redis instance.

## Prerequisites

Make sure you have the following installed on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/hritesh04/aicerts-todo.git
   cd aicerts-todo
   ```

2. **Create a .env File**

Create a .env file in the root directory of the project and add the following environment variables:

```sh
BACKEND_PORT=3000 #can be any other free port in your system
```

or you can simply rename the existing .env.example file to .env

```sh
cp .env.example .env
```

3. **Run Docker Compose**

Make sure Docker is running on your system, then start the Docker containers defined in the docker-compose.yml file using the following command :

```
docker-compose up
```

This command will build the Docker images for the frontend and backend, start the containers, and expose the frontend on port 5173 and the backend on port 3000.
