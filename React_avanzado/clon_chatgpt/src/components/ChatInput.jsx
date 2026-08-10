import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useChat } from "../context";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");
  const { state } = useChat();

  const handleSend = () => {
    if (!input.trim()) return;
    onSend?.(input);
    setInput("");
  };

  return (
    <footer className="border-t border-gray-700 bg-[#111827]">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center bg-gray-800 rounded-full px-2 py-2">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-transparent px-4 outline-none placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={state.isLoading}
          />
          <button
            onClick={handleSend}
            disabled={state.isLoading || !input.trim()}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition"
          >
            <SendHorizontal size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
