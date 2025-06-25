export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div>
        <h2 className="font-bold text-lg">Miriam Jelly</h2>
        <p className="text-sm text-green-600">Typing...</p>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-right text-sm">
          <span className="font-semibold">Denema Building</span>
          <br />
          <span className="text-gray-500">Sheffield</span>
        </p>
        <img
          src="https://i.pravatar.cc/150?u=building"
          alt="Building"
          className="h-10 w-10 rounded-md"
        />
      </div>
    </div>
  );
}
