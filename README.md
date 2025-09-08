# NodeOps Task Manager Template

A simple task management application template designed for the NodeOps Cloud Marketplace. This project showcases how to deploy a template on the NodeOps Cloud Marketplace and start earning revenue share.

## 🚀 Features

- **Task Management**: Create, complete, and delete tasks
- **Local Storage**: Tasks are stored locally in your browser
- **Task Statistics**: View total, completed, and remaining task counts
- **Docker Support**: Containerized for easy deployment
- **Responsive Design**: Modern UI with Tailwind CSS
- **NodeOps Integration**: Ready for NodeOps Cloud Marketplace deployment

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Icons**: Lucide React
- **Containerization**: Docker

## 📦 Installation

### Prerequisites
- Node.js 24+
- npm
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/NodeOps-app/Nodeops-Template-Example-App.git
   cd Nodeops-Template-Example-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. **Build the Docker image**
   ```bash
   # With default environment variable
   docker build -t nodeops-task-manager .
   
   # With custom environment variable
   docker build -t nodeops-task-manager .
   ```

2. **Run the container**
   ```bash
   docker run -p 8000:3000 nodeops-task-manager
   ```

3. **Access the application**
   Navigate to [http://localhost:8000](http://localhost:8000)

## 🔧 Environment Variables



## 🎯 NodeOps Integration

This demo showcases:

1. **Template Creation**: How to structure a deployable application
2. **Docker Containerization**: Preparing apps for NodeOps Cloud Marketplace
3. **Environment Configuration**: Managing runtime variables
4. **Revenue Sharing**: Potential for earning through the marketplace

## 📚 Resources

- [NodeOps Docker Guide](https://docs.nodeops.network/Guides/Marketplace/Configure-Compute/public-docker)
- [NodeOps Twitter](https://x.com/BuildOnNodeOps)
- [Source Code Repository](https://github.com/NodeOps-app/Nodeops-Template-Example-App)

## 🏗️ Project Structure

```
Nodeops-Template-Example-App/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   └── ui/               # UI components (Radix UI)
├── lib/                   # Utility functions
├── public/                # Static assets
├── Dockerfile            # Docker configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Deployment to NodeOps

1. **Prepare your template**:
   - Ensure Dockerfile is optimized
   - Set appropriate environment variables
   - Test locally with Docker

2. **Submit to NodeOps Marketplace**:
   - Follow the [Docker Guide](https://docs.nodeops.network/Guides/Marketplace/Configure-Compute/public-docker)
   - Upload your Docker image

3. **Start earning**:
   - Users can deploy your template
   - Earn revenue share from deployments
   - Scale your template business

## 🤝 Contributing

This is a demo project. Feel free to fork and modify for your own NodeOps templates!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).