# Tempu-Mail

A modern, cross-platform email client built with Wails, React, and TypeScript.

## ✨ Features

- 📧 Manage multiple email accounts in one place
- 🚀 Built with Wails for native performance
- ⚡ Lightning-fast UI with React and TypeScript
- 🎨 Modern and responsive interface
- 🔒 Secure email handling
- 📱 Cross-platform support (Windows, macOS, Linux)

## ✨ For Users

### Download and Install

Users use fast way and easy way to download and install Tempu-Mail
[Download](https://github.com/devgauravjatt/Tempu-Mail/releases)

## 🚀 Getting Started (For Developers)

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
