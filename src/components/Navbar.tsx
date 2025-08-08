import { Search, CalendarDays, Maximize, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 bg-black p-4 text-white">
      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-md border border-r-0 border-gray-600 bg-black px-4 py-2 focus:outline-none"
        />
        <button className="rounded-r-md bg-[#F0EAD6] p-3 text-black">
          <Search size={20} />
        </button>
      </div>

      {/* Center Info Block */}
      <div className="rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-0.5">
        <div className="flex items-center gap-8 rounded-full bg-black px-6 py-1.5">
          <div className="text-center">
            <p className="text-sm">Active Cases</p>
            <p className="font-bold">138</p>
          </div>

          <div className="h-10 w-px bg-gray-700"></div>

          <div className="flex items-center gap-2">
            <CalendarDays size={20} />
            <span>Today, Jan 21, 2025</span>
          </div>

          <div className="h-10 w-px bg-gray-700"></div>

          <div className="rounded-full bg-gradient-to-r from-green-400 to-yellow-400 p-0.5">
            <button className="rounded-full bg-black px-5 py-1.5 font-semibold">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Right-side Controls */}
      <div className="flex items-center gap-6">
        <button>
          <Maximize size={24} />
        </button>
        <div className="relative">
          <Bell size={24} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs">
            3
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserCircle size={32} />
          <span className="font-semibold">Admin</span>
        </div>
      </div>
    </nav>
  );
}
