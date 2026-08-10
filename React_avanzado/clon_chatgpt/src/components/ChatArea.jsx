import { useRef, useEffect } from "react";
import { useChat } from "../context";
import { sendMessageToOllama } from "../hooks/useOllama";

export default function ChatArea({ onSendRef }) {
  const { state, dispatch } = useChat();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const handleSend = async (text) => {
    if (!text.trim() || state.isLoading) return;

    dispatch({ type: "SEND_MESSAGE", payload: text });

    const result = await sendMessageToOllama({
      message: text,
      model: state.selectedModel,
      history: state.messages,
    });

    if (result.success) {
      dispatch({
        type: "BOT_RESPONSE",
        payload: { text: result.text, model: state.selectedModel },
      });
    } else {
      dispatch({ type: "SET_ERROR", payload: result.error });
    }
  };

  useEffect(() => {
    if (onSendRef) {
      onSendRef.current = handleSend;
    }
  });

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-5">
        {state.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-blue-600 rounded-br-md"
                  : "bg-gray-800 rounded-bl-md"
              }`}
            >
              <p className="whitespace-pre-wrap break-words">{msg.text}</p>
              {msg.model && (
                <span className="text-xs text-gray-400 mt-1 block">
                  {msg.model}
                </span>
              )}
            </div>
          </div>
        ))}
        {state.isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
