import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface ContextItem {
  question: string;
  answer: string;
}

const Contact = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [julianContext, setJulianContext] = useState<ContextItem[]>([]);

  // Fetch Julian's context information
  useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await fetch('/context.json');
        if (response.ok) {
          const contextData = await response.json();
          setJulianContext(contextData);
        } else {
          console.error("Failed to load context data");
        }
      } catch (error) {
        console.error("Error loading context:", error);
      }
    };
    
    fetchContext();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sanitizeResponse = (text: string) => {
    // Remove HTML-like tags (like </think>) 
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const fetchAIResponse = async (userMessage: string) => {
    setIsLoading(true);
    try {
      // Format context as a string of Q&A pairs
      const formattedContext = julianContext.map(item => 
        `Q: ${item.question}\nA: ${item.answer}`
      ).join('\n\n');
      
      // Create the system instruction with Julian's context
      const systemInstruction = `You are an AI assistant on Julian Schwab's Portfolio Website. You only answer questions about Julian. Aways awnser in maximum 2 sentences. the user dosent know about the Q&A format. You like to make silly jokes. Remove everything from the output that is like OUTPUT: or Final Awnser.
      
Here is information about Julian Schwab in Q&A format:

${formattedContext}

Use the above information to answer user questions. If you don't know the answer based on the provided information, politely say that you don't have that specific information about Julian yet.`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1-distill-llama-8b",
          "messages": [
            { "role": "system", "content": systemInstruction },
            ...messages.map(msg => ({
              role: msg.isUser ? "user" : "assistant",
              content: msg.text
            })),
            { "role": "user", "content": userMessage }
          ]
        })
      });
      
      const data = await response.json();
      if (data.choices && data.choices[0]?.message?.content) {
        return sanitizeResponse(data.choices[0].message.content);
      }
      return "Sorry, I couldn't process your request.";
    } catch (error) {
      console.error("Error fetching from OpenRouter:", error);
      return "Sorry, there was an error processing your request.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput("");
    
    // Get AI response
    const aiResponse = await fetchAIResponse(userMessage);
    setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl mb-8 animate-fade-in">Let's Chat</h2>
        <div className="bg-accent/10 rounded-lg p-4 h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-accent/20 rounded-tr-none"
                      : "bg-accent/40 rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-accent/40 rounded-tl-none">
                  <span className="inline-block animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-accent/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className={`p-2 rounded-lg transition-colors ${
                isLoading 
                  ? "bg-accent/10 cursor-not-allowed" 
                  : "bg-accent/20 hover:bg-accent/40"
              }`}
              disabled={isLoading}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;