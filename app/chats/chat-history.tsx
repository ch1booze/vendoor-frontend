const messages = [
  { type: "date", label: "YESTERDAY" },
  {
    id: 1,
    sender: "them",
    name: "Miriam Jelly",
    avatar: "https://i.pravatar.cc/150?u=miriam",
    time: "04:30 PM",
    text: "Hi! I saw your real estate dashboard tool online. Can you tell me more about its features?",
  },
  {
    type: "own_message",
    id: 2,
    sender: "me",
    name: "Adelle Hay",
    avatar: "https://i.pravatar.cc/150?u=adelle",
    time: "04:31 PM",
    text: "Hello! Sure, the real estate dashboard provides real-time data on property listings, market trends, price comparisons, and investment analysis. It's designed to help both agents and buyers make informed decisions.",
  },
  { type: "date", label: "TODAY" },
  {
    id: 3,
    sender: "them",
    name: "Miriam Jelly",
    avatar: "https://i.pravatar.cc/150?u=miriam",
    time: "04:30 PM",
    text: "That sounds great! Does it include data on both residential and commercial properties?",
  },
  {
    id: 4,
    sender: "me",
    name: "Adelle Hay",
    avatar: "https://i.pravatar.cc/150?u=adelle",
    time: "04:31 PM",
    text: "Yes, it covers both residential and commercial properties. You can filter by location, property type, price range, and more.",
  },
];

function ChatMessage({ message }) {
  const isOwnMessage = message.sender === "me";

  if (message.type === "date") {
    return (
      <div className="text-center text-xs text-gray-500 uppercase my-4">
        {message.label}
      </div>
    );
  }

  return (
    <div
      className={`flex gap-x-3 my-4 ${
        isOwnMessage ? "justify-end" : "justify-start"
      }`}
    >
      {!isOwnMessage && (
        <img
          src={message.avatar}
          alt={message.name}
          className="h-10 w-10 rounded-full"
        />
      )}

      <div
        className={`flex flex-col ${
          isOwnMessage ? "items-end" : "items-start"
        }`}
      >
        {!isOwnMessage && (
          <p className="text-sm font-semibold text-gray-800">{message.name}</p>
        )}
        <div
          className={`max-w-lg p-3 rounded-xl ${
            isOwnMessage
              ? "bg-green-500 text-white"
              : "bg-slate-100 text-gray-800"
          }`}
        >
          <p>{message.text}</p>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {message.time} {isOwnMessage && `• ${message.name}`}
        </p>
      </div>

      {isOwnMessage && (
        <img
          src={message.avatar}
          alt={message.name}
          className="h-10 w-10 rounded-full"
        />
      )}
    </div>
  );
}

export function ChatHistory() {
  return (
    <div className="flex-grow overflow-y-auto p-6">
      {messages.map((msg, index) => (
        <ChatMessage key={msg.id || index} message={msg} />
      ))}
    </div>
  );
}
