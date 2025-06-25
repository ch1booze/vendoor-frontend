import { FaSearch, FaEllipsisH } from "react-icons/fa";

const conversations = [
  {
    id: 1,
    name: "Adam Johnson",
    avatar: "https://i.pravatar.cc/150?u=adam",
    lastMessage: "You: Hello there, I need to cancel...",
    time: "4h ago",
    tags: ["Denema Building", "Sheffield"],
    unread: true,
  },
  {
    id: 2,
    name: "Miriam Jelly",
    avatar: "https://i.pravatar.cc/150?u=miriam",
    lastMessage: "Typing...",
    time: "4h ago",
    tags: ["Greater House", "Jakarta"],
    unread: false,
    active: true,
  },
  {
    id: 3,
    name: "Roger Toff",
    avatar: "https://i.pravatar.cc/150?u=roger",
    lastMessage: "Hello there, I need to cancel...",
    time: "4h ago",
    tags: ["Denema Building", "Sheffield"],
    unread: false,
  },
];

function ConversationItem({ conversation }) {
  const isActive = conversation.active;
  return (
    <div
      className={`flex gap-x-4 p-3 rounded-lg ${
        isActive ? "bg-slate-100" : "hover:bg-slate-50"
      }`}
    >
      <div className="relative">
        <img
          src={conversation.avatar}
          alt={conversation.name}
          className="h-12 w-12 rounded-full"
        />
        {conversation.unread && (
          <span className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        )}
      </div>
      {/* Message content */}
      <div className="flex-grow">
        <div className="flex justify-between">
          <p className="font-bold text-gray-900">{conversation.name}</p>
          <p className="text-xs text-gray-500">{conversation.time}</p>
        </div>
        <p className="text-sm text-gray-600 truncate">
          {conversation.lastMessage}
        </p>
        <div className="flex gap-x-2 mt-1">
          {conversation.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="w-1/3 min-w-[350px] border-r border-gray-200 bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Messages</h1>
        <FaEllipsisH className="text-gray-500" />
      </div>

      <div className="p-4 flex gap-x-2">
        <button className="flex-1 bg-gray-900 text-white text-sm font-semibold py-2 rounded-lg">
          All
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 text-sm font-semibold py-2 rounded-lg">
          Unread
        </button>
        <button className="p-2 bg-gray-100 rounded-lg">
          <FaSearch className="text-gray-600" />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-2 space-y-2">
        {conversations.map((convo) => (
          <ConversationItem key={convo.id} conversation={convo} />
        ))}
      </div>
    </div>
  );
}
