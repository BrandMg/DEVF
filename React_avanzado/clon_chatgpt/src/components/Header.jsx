import { useChat } from "../context";

const MODELS = [
  { id: "deepseek-r1:1.1b", name: "DeepSeek R1 1.1B" },
  { id: "deepseek-r1:7b", name: "DeepSeek R1 7B" },
  { id: "llama2", name: "Llama 2" },
];

export default function Header() {
  const { state, dispatch } = useChat();

  return (
    <header className="h-16 border-b border-gray-700 flex items-center justify-between px-6 bg-[#111827]">
      <h1 className="font-semibold text-lg">Mi ChatBot</h1>
      <select
        value={state.selectedModel}
        onChange={(e) => dispatch({ type: "SET_MODEL", payload: e.target.value })}
        className="bg-gray-800 text-sm text-gray-200 rounded-lg px-3 py-1.5 outline-none border border-gray-700"
      >
        {MODELS.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </header>
  );
}
