// 📁 features/chat/components/ChatMessage.tsx
import { Card, CardContent } from "@/components/ui/card";

interface ChatMessageProps {
  role: "user" | "bot";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <Card className={`max-w-xs ${isUser ? "bg-blue-100" : "bg-gray-200"}`}>
        <CardContent className="p-3 text-sm text-gray-800 whitespace-pre-wrap">
          {content}
        </CardContent>
      </Card>
    </div>
  );
}





