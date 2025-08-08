import { useState } from "react";
import {
  LayoutGrid,
  Building2,
  Gavel,
  FileClock,
  FilePlus2,
  Users,
  Upload,
  Users2,
  Database,
  FileText,
  FileDown,
  Download,
} from "lucide-react";

const navItems = [
  { icon: <LayoutGrid size={20} />, text: "Dashboard" },
  { icon: <Building2 size={20} />, text: "Company" },
  { icon: <Gavel size={20} />, text: "Arbitrator" },
  { icon: <FileClock size={20} />, text: "Old Case" },
  { icon: <FilePlus2 size={20} />, text: "Add New Case" },
  { icon: <Users size={20} />, text: "Case Management" },
  { icon: <Upload size={20} />, text: "Upload Document" },
  { icon: <Users2 size={20} />, text: "Communication" },
  { icon: <Database size={20} />, text: "Create New Notice" },
  { icon: <FileText size={20} />, text: "Edit Notice Template" },
  { icon: <FileDown size={20} />, text: "Generate PDF" },
  { icon: <Download size={20} />, text: "Download PDF" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#111111] p-4 text-white">
      <div className="mb-10 p-2">
        <span className="font-serif text-4xl">मंच </span>
        <span className="font-garamond text-4xl italic">manch.</span>
      </div>

      <nav className="flex flex-col gap-y-2">
        {navItems.map((item) => (
          <a
            key={item.text}
            href="#"
            onClick={() => setActiveItem(item.text)}
            className={`flex items-center gap-x-3 rounded-md px-3 py-2.5 font-medium ${
              activeItem === item.text
                ? "bg-[#3B82F6] text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
