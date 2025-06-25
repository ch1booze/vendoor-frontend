import { ChatHeader } from "~/chats/chat-header";
import { ChatHistory } from "~/chats/chat-history";
import { MessageBox } from "~/chats/message-box";
import { Sidebar } from "~/chats/sidebar";

export default function Demo() {
  return <div className="flex h-screen bg-gray-50 font-sans">
        <Sidebar />
        <main className="flex-grow flex flex-col">
          <ChatHeader />
          <ChatHistory />
          <MessageBox />
        </main>
      </div>
}
