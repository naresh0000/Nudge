const ChatWindow = () => {
  return (
    <div className="h-full w-full p-4">
      <h2 className="font-bold text-lg mb-4">Chat Area</h2>
      <input
        type="text"
        className="border border-gray-300 rounded p-2 mr-2"
        placeholder="Type your question..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
};

export default ChatWindow;
