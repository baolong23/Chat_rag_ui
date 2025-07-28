// 📁 features/chat/pages/ChatbotPage.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import ChatMessage from "../components/ChatMessage";
import { useChat } from "../hooks/useChat";
import UploadPanel from "../components/UploadPanel";
import  UploadedFileSelector  from "../components/UploadFileSelector";


export default function ChatbotPage() {
  const { messages, input, setInput, sendMessage, isSending, selectedFile, setSelectedFile } = useChat();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    setIsUploading(true);
    try {
      const res = await fetch("https://bqmpqyj0p7.execute-api.us-east-1.amazonaws.com/dev/ingest", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      setFile(file);
    } catch (e) {
      alert("❌ Failed to upload file");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-4 md:p-10 gap-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">📁 Chat with Your Document</h1>

      <motion.div
        className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-row gap-2">
            <UploadPanel onUpload={handleUpload} file={file} isUploading={isUploading} />
            <UploadedFileSelector selectedFile={selectedFile} onSelectFile={setSelectedFile} />
        </div>

        <div className="max-h-[300px] overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role as any} content={msg.content} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Textarea
            placeholder="Ask about the file..."
            className="flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={sendMessage} size="icon" variant="outline" disabled={isSending}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}


