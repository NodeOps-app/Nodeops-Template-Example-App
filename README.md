# NodeOps Example - Task Manager

Welcome to the NodeOps Example Task Manager! This is a starter application designed to help developers get familiar with NodeOps and its capabilities. This simple yet functional todo application demonstrates basic NodeOps features and best practices for containerized Node.js applications.

## 🚀 Features

- Containerized Node.js application
- Express.js backend
- Simple task management
- Docker support

## 📁 Project Structure

```
.
├── public/                 # Frontend assets
│   ├── index.html         # Main HTML file
│   ├── styles.css         # CSS styles
│   ├── script.js          # Frontend JavaScript
│   └── logo.png           # NodeOps logo
├── server.js              # Express.js server
├── package.json           # Project dependencies
├── Dockerfile            # Docker configuration
└── .dockerignore         # Docker ignore rules
```

## 🛠️ Prerequisites

- Node.js (v10 or higher)
- Docker (for containerized deployment)
- npm or yarn package manager

## 🚀 Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nodeops-example-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Docker Deployment

#### Using Docker Compose (Recommended)

1. Start the application:
   ```bash
   docker-compose up -d
   ```

2. View the logs:
   ```bash
   docker-compose logs -f
   ```

3. Stop the application:
   ```bash
   docker-compose down
   ```

4. Rebuild the container (if you make changes):
   ```bash
   docker-compose build
   ```

5. Check container status:
   ```bash
   docker-compose ps
   ```

The application will be available at `http://localhost:3000`

### Deploying to NodeOps Server

1. Go to the NodeOps Agent Terminal
2. Deploy a new instance
3. Once the instance is up (you'll see an IDE-like interface):
   - Open the terminal in the instance
   - Copy the contents of the `setup.sh` script from this repository
   - Paste and run the script in the terminal
4. The script will automatically:
   - Initialize the project
   - Set up all dependencies
   - Configure the environment
   - Start the application

Your application will be ready to use once the setup script completes.

#### Using Docker Directly

1. Build the Docker image:
   ```bash
   docker build -t nodeops-todo-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 nodeops-todo-app
   ```

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Containerization**: Docker

## 🎯 What to Expect

This example application demonstrates:

**NodeOps Containerization**: Learn how to containerize a Node.js application for NodeOps Network

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is part of the NodeOps examples and is available under the MIT License.

## 🔗 Useful Links

- [NodeOps Documentation](https://docs.nodeops.com)
- [Express.js Documentation](https://expressjs.com)
- [Docker Documentation](https://docs.docker.com)

---

Built with ❤️ by the NodeOps Team # Nodeops-Template-Example-App
# Nodeops-Template-Example-App
