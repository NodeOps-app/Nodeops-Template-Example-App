#!/bin/bash

# Install nvm
echo "Installing nvm..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Load nvm immediately
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Verify nvm installation
echo "Verifying nvm installation..."
command -v nvm

# Install Node.js 23
echo "Installing Node.js 23.5..."
nvm install 23.5

# Clone your repositories
echo "Cloning repositories..."
# Replace these URLs with your actual repository URLs

git clone https://github.com/NodeOps-app/Nodeops-Template-Example-App.git

# Get Xoe started
cd Nodeops-Template-Example-App

# Install dependencies and build
npm install

# Install PM2 globally
echo "Installing PM2..."
npm install -g pm2

# Start with PM2 instead of direct start
pm2 start "npm start" --name "nodeops-example-template"

# (Optional) Save PM2 process list to automatically restart on server reboot
pm2 save

# (Optional) Setup PM2 to start on system boot
pm2 startup

echo "Installation complete!"

echo "Installation complete! Your application is running with PM2"
echo "Use 'pm2 status' to check status"
echo "Use 'pm2 logs nodeops-example-template' to see logs"
echo "Use 'pm2 monit' for monitoring"