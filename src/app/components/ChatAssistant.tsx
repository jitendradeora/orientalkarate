import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm your Oriental Karate assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Thank you for your message! For immediate assistance, please call us at +971 (2) 6771611 or WhatsApp +971 50 677 16 89, or book a free trial class." },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 bg-[#FFD700] text-black p-4 rounded-full shadow-2xl hover:bg-[#FFD700]/90 transition-all hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-40 w-80 md:w-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-[#eb0339] text-white p-4">
              <h3 className="font-bold">AI Chat Assistant</h3>
              <p className="text-sm opacity-90">Available 24/7</p>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-800">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === "user"
                        ? "bg-[#eb0339] text-white"
                        : "bg-gray-700 text-white border border-gray-600"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-900 border-t border-gray-700 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb0339]"
              />
              <button
                onClick={handleSend}
                className="bg-[#eb0339] text-white p-2 rounded-lg hover:bg-[#c70230] transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
