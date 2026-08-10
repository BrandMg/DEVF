const OLLAMA_BASE_URL = "http://localhost:11434";

export async function sendMessageToOllama({ message, model = "deepseek-r1:1.1b", history = [] }) {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          ...history.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
          { role: "user", content: message },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, text: data.message.content };
  } catch (error) {
    return { success: false, error: error.message || "Error al conectar con Ollama" };
  }
}

export function useOllama() {
  return {
    sendMessageToOllama,
    baseUrl: OLLAMA_BASE_URL,
  };
}
