import { useReducer, createContext } from "react";

/* eslint-disable react-refresh/only-export-components */
export const ChatContext = createContext(null);

const initialState = {
  messages: [
    {
      id: "welcome",
      sender: "bot",
      text: "Hola 👋 ¿En qué puedo ayudarte?",
      timestamp: Date.now(),
    },
  ],
  isLoading: false,
  error: null,
  selectedModel: "deepseek-r1:1.1b",
};

function chatReducer(state, action) {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            sender: "user",
            text: action.payload,
            timestamp: Date.now(),
          },
        ],
        isLoading: true,
        error: null,
      };
    case "BOT_RESPONSE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            sender: "bot",
            text: action.payload.text,
            model: action.payload.model,
            timestamp: Date.now(),
          },
        ],
        isLoading: false,
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "CLEAR_HISTORY":
      return {
        ...state,
        messages: [
          {
            id: "welcome",
            sender: "bot",
            text: "Historial limpiado. ¿En qué puedo ayudarte?",
            timestamp: Date.now(),
          },
        ],
      };
    case "SET_MODEL":
      return { ...state, selectedModel: action.payload };
    default:
      return state;
  }
}

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}


