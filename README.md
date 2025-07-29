# Chatbot UI (RAG)

## Features
- Upload documents and chat with their content
- Select uploaded files and ask a question about file document
- React + TypeScript + Vite + Tailwind CSS
- Clean, minimal, and responsive design

## Project Structure
```
chatbot-ui/
├── public/                # Static assets
├── src/
│   ├── App.tsx            # Main app entry
│   ├── features/
│   │   └── chat/
│   │       ├── components/  # Chat UI components
│   │       ├── hooks/       # Custom React hooks
│   │       └── pages/       # Chatbot page
│   └── components/ui/     # Reusable UI components
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS config
├── vite.config.ts         # Vite config
└── ...
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## Usage
- Upload a document using the upload panel.
- Select an uploaded file from the dropdown.
- Type your question and chat with the document.

## Tech Stack
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

