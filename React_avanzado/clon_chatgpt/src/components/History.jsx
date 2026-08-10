import { useChat } from "../context";

export default function History({ onSelect }) {
  const { state, dispatch } = useChat();

  const handleClear = () => {
    dispatch({ type: "CLEAR_HISTORY" });
  };

  return (
    <div className="w-64 border-r border-gray-700 bg-[#0f172a] flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
          Historial
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        <div className="flex flex-col gap-1">
          {state.messages
            .filter((m) => m.sender === "user")
            .map((msg) => (
              <button
                key={msg.id}
                onClick={() => onSelect?.(msg.text)}
                className="text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 transition truncate"
                title={msg.text}
              >
                {msg.text}
              </button>
            ))}
        </div>
      </div>
      <div className="p-3 border-t border-gray-700">
        <button
          onClick={handleClear}
          className="w-full text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 rounded-lg transition"
        >
          Limpiar historial
        </button>
      </div>
    </div>
  );
}
