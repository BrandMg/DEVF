import { useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hola 👋 ¿En qué puedo ayudarte?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
    ]);

    console.log("Sending:", input);

    setInput("");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black flex flex-col text-white">
      {/* Header */}
      <header className="h-16 border-b border-gray-700 flex items-center justify-center font-semibold text-lg">
        Mi ChatBot
      </header>

      {/* Mensajes */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-5">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-blue-600 rounded-br-md"
                    : "bg-gray-800 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Input */}
      <footer className="border-t border-gray-700 bg-[#111827]">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center bg-gray-800 rounded-full px-2 py-2">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-transparent px-4 outline-none placeholder-gray-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
            >
              <SendHorizontal size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}