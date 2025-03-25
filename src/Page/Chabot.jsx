import React, { useState } from "react";
import Robot from "../assets/Ai/robottwo.png";
import axios from "axios"; // Import axios for API requests

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    const newMessages = [
      ...chatMessages,
      { message: userMessage, sender: "user" },
    ];
    setChatMessages(newMessages);
    setUserMessage("");

    try {
      setLoading(true);

      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA1ArI3yYq42zTultXI7YC51EcA6LrxgZ0",
        {
          contents: [
            {
              parts: [{ text: userMessage }],
            },
          ],
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;

      setChatMessages([
        ...newMessages,
        { message: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatMessages([
        ...newMessages,
        { message: "Error: Could not get response from AI", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="fixed bottom-0 right-0 mb-4 mr-4 sm:mr-6 md:mr-8 lg:mr-8 animate-bounce">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="text-white py-2 px-4 rounded-md transition duration-300 flex flex-col items-center"
        >
          <img
            src={Robot}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 mr-2"
          />
          <p className="text-center text-black text-xs mt-2">Ask Elevate</p>
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 sm:w-96 md:w-96 lg:w-96 bg-white shadow-md rounded-lg z-50">
          <div className="p-4 border-b bg-gray-800 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-300 hover:text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-3 h-64 sm:h-72 md:h-80 overflow-y-auto">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : ""
                }`}
              >
                <p
                  className={`${
                    message.sender === "user"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-lg py-2 px-4 inline-block text-sm`}
                >
                  {message.message}
                </p>
              </div>
            ))}
            {loading && (
              <div className="text-center text-gray-500">Loading...</div>
            )}
          </div>

          <div className="p-3 border-t flex">
            <input
              type="text"
              placeholder="Type a message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition duration-300 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
