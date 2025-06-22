# NodeOps Web3 Task Manager

A Web3-enabled task management application designed for the NodeOps hackathon demo. This project showcases how to deploy a template on the NodeOps Cloud Marketplace and start earning revenue share.

## 🚀 Features

- **Web3 Wallet Integration**: Connect with Ethereum wallets (MetaMask, etc.)
- **Task Management**: Create, complete, and delete tasks associated with your wallet
- **Local Storage**: Tasks are stored locally and linked to your wallet address
- **Environment Variables**: Demonstrates runtime environment variable handling
- **Docker Support**: Containerized for easy deployment
- **Responsive Design**: Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Web3**: Ethereum wallet integration
- **Icons**: Lucide React
- **Containerization**: Docker

## 📦 Installation

### Prerequisites
- Node.js 20+
- pnpm (recommended) or npm
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

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   echo "NEXT_PUBLIC_TEST=Hello from local development!" > .env.local
   ```

4. **Run the development server**
   ```bash
   npm start
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. **Build the Docker image**
   ```bash
   # With default environment variable
   docker build -t nodeops-task-manager .
   
   # With custom environment variable
   docker build --build-arg NEXT_PUBLIC_TEST="Hello from Docker!" -t nodeops-task-manager .
   ```

2. **Run the container**
   ```bash
   docker run -p 8000:3000 nodeops-task-manager
   ```

3. **Access the application**
   Navigate to [http://localhost:8000](http://localhost:8000)

## 🔧 Environment Variables

- `NEXT_PUBLIC_TEST`: Displayed in the UI to demonstrate environment variable handling

## 🎯 NodeOps Integration

This demo showcases:

1. **Template Creation**: How to structure a deployable application
2. **Docker Containerization**: Preparing apps for NodeOps Cloud Marketplace
3. **Environment Configuration**: Managing runtime variables
4. **Revenue Sharing**: Potential for earning through the marketplace

## 📚 Resources

- [NodeOps Documentation](https://docs.nodeops.network/Guides/Marketplace/Configure-Compute/Create-Templates)
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
│   ├── ui/               # UI components (Radix UI)
│   └── wallet-connect.tsx # Wallet connection component
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
   - Follow the [Create Templates Guide](https://docs.nodeops.network/Guides/Marketplace/Configure-Compute/Create-Templates)
   - Upload your Docker image

3. **Start earning**:
   - Users can deploy your template
   - Earn revenue share from deployments
   - Scale your template business

## 🤝 Contributing

This is a demo project for the hackathon. Feel free to fork and modify for your own NodeOps templates!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built for NodeOps Hackathon** 🚀