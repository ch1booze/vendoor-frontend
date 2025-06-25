import { FaPaperPlane } from 'react-icons/fa';

export function MessageBox() {
  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center gap-x-4">
        <input
          type="text"
          placeholder="By the way..."
          className="flex-grow p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-gray-900 text-white p-3 rounded-lg flex items-center justify-center">
          <FaPaperPlane />
          <span className="ml-2 font-semibold">Send</span>
        </button>
      </div>
    </div>
  );
}