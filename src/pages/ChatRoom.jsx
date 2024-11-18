import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { client, databases } from "../utils/appwrite";
import { useUserStore } from "../store/userStore";
import { Query } from "appwrite";

const DATABASE_ID = "6739a7360014e787cfad";
const CHAT_COLLECTION_ID = "673b42d8000894bdecd1";

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const { name } = useUserStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await databases.listDocuments(DATABASE_ID, CHAT_COLLECTION_ID, [
                    Query.orderAsc("timestamp"),
                ]);
                setMessages(response.documents);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching messages:", error);
                setLoading(false);
            }
        };

        fetchMessages();

        const unsubscribe = client.subscribe(
            `databases.${DATABASE_ID}.collections.${CHAT_COLLECTION_ID}.documents`,
            (response) => {
                if (response.events.some((event) => event.includes("create"))) {
                    const newMessage = response.payload;
                    setMessages((prevMessages) =>
                        [...prevMessages, newMessage].sort(
                            (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
                        )
                    );
                }
            }
        );

        return () => unsubscribe();
    }, []);

    const sendMessage = async () => {
        if (!messageInput.trim()) return;

        const newMessage = {
            message: messageInput,
            sender: name,
            timestamp: new Date().toISOString(),
        };

        try {
            await databases.createDocument(DATABASE_ID, CHAT_COLLECTION_ID, "unique()", newMessage);
            setMessageInput("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (

        <>
            <p className="text-center text-3xl font-bold p-5"  >Alumni Chat Room</p>
        <div className="flex flex-col mt-10 mb-10 w-[90vw] max-w-[100vw] mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex flex-col space-y-4 overflow-y-auto flex-grow h-[500px] p-4 bg-gray-50 rounded-lg">
                {loading ? (
                    <p className="text-gray-500 text-center">Loading messages...</p>
                ) : (
                    messages.map((message) => (
                        <div
                            key={message.$id}
                            className={`flex items-start space-x-4 p-4 rounded-lg ${
                                message.sender === name
                                    ? "flex-row-reverse bg-blue-100 text-blue-900"
                                    : "bg-white text-gray-800"
                            } shadow-sm`}
                        >
                            <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold">
                                {message.sender[0].toUpperCase()}
                            </div>
                            <div className="flex flex-col">
                                <strong className="text-base font-semibold">{message.sender}</strong>
                                <p className="text-sm">{message.message}</p>
                                <small className="text-gray-500 text-xs">
                                    {new Date(message.timestamp).toLocaleString()}
                                </small>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Message Input and Send Button */}
            <div className="mt-4 flex items-center space-x-4">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
                    className="flex-grow p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
                <button
                    onClick={sendMessage}
                    
                    className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
                >
                    <FaPaperPlane size={20} />
                </button>
            </div>
        </div>
        </>
    );
};

export default ChatRoom;
