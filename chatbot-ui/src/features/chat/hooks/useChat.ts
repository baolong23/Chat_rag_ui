// 📁 features/chat/hooks/useChat.ts
import { useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");


  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    const question = input;
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("https://bqmpqyj0p7.execute-api.us-east-1.amazonaws.com/dev/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question,top_k: 10  ,name_space: selectedFile  }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.answer.content }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "bot", content: "❌ Error: failed to get response." }]);
    } finally {
      setIsSending(false);
    }
  };

  return { messages, input, setInput, sendMessage, isSending, selectedFile, setSelectedFile };
}

