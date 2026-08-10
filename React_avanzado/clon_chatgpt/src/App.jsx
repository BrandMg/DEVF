import { useRef } from "react";
import { ChatProvider, useChat } from "./context";
import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import ChatInput from "./components/ChatInput";
import History from "./components/History";

function ChatLayout() {
  const { dispatch } = useChat();
  const sendRef = useRef(null);

  return (
    <div className="h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-black flex flex-col text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <History
          onSelect={(text) => {
            dispatch({ type: "SEND_MESSAGE", payload: text });
          }}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <ChatArea onSendRef={sendRef} />
          <ChatInput onSend={(text) => sendRef.current?.(text)} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ChatProvider>
      <ChatLayout />
    </ChatProvider>
  );
}
