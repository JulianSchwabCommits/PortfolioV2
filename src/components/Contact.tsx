import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    // Add a simple response (in a real app, this would be connected to an AI service)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! I'll get back to you soon.", 
        isUser: false 
      }]);
    }, 1000);
    
    setInput("");
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
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-accent/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-accent/20 rounded-lg hover:bg-accent/40 transition-colors"
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