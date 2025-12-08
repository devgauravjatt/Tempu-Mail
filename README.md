# Tempu-Mail

A modern, cross-platform email client built with Wails, React, and TypeScript.

## ✨ Features

- 📧 Manage multiple email accounts in one place
- 🚀 Built with Wails for native performance
- ⚡ Lightning-fast UI with React and TypeScript
- 🎨 Modern and responsive interface
- 🔒 Secure email handling
- 📱 Cross-platform support (Windows, macOS, Linux)

## � For Users

### Download and Install

1. **Download** the latest release for your operating system from our [Releases page](https://github.com/yourusername/tempu-mail/releases)

   - Windows: `tempu-mail-windows-x64.exe`
   - macOS: `tempu-mail-darwin-x64.dmg`
   - Linux: `tempu-mail-linux-x64.AppImage`

2. **Install**
   - **Windows**: Double-click the downloaded `.exe` file
   - **macOS**: Open the `.dmg` file and drag Tempu-Mail to Applications
   - **Linux**: Make the AppImage executable and run it:
     ```bash
     chmod +x tempu-mail-linux-x64.AppImage
     ./tempu-mail-linux-x64.AppImage
     ```

### First-Time Setup

1. Launch Tempu-Mail
2. Click "Add Account" to connect your email
3. Enter your email address and password
4. Follow the on-screen instructions to complete setup

## �🚀 Getting Started (For Developers)

### Prerequisites

- Go 1.16 or higher
- Node.js 16+ and npm
- Wails CLI (`go install github.com/wailsapp/wails/v2/cmd/wails@latest`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tempu-mail.git
   cd tempu-mail
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠 Development

### Running in Development Mode

```bash
wails dev
```

This will start:

- Vite dev server for frontend (http://localhost:34115)
- Hot reload for frontend changes
- Access to Go backend methods from browser devtools

### Building the Application

To create a production build:

```bash
wails build
```

## 📦 Project Structure

- `/frontend` - React TypeScript frontend
- `/app` - Go backend code
- `wails.json` - Wails project configuration

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
