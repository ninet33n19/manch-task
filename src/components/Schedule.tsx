const scheduleItems = [
  {
    time: "9:00 am",
    title: "Client Consultation",
    company: "Tech Startup LLC",
    color: "blue",
  },
  {
    time: "11:30 am",
    title: "Contract Review Meeting",
    company: "Global Corp",
    color: "yellow",
  },
  {
    time: "2:00 pm",
    title: "Legal Strategy Session",
    company: "Innovation Partners",
    color: "yellow",
  },
  {
    time: "4:30 pm",
    title: "Document Finalization",
    company: "Regional Bank",
    color: "blue",
  },
];

const ScheduleItem = ({
  time,
  title,
  company,
  color,
}: {
  time: string;
  title: string;
  company: string;
  color: string;
}) => {
  const baseStyle = "p-4 rounded-lg";
  const blueStyle = "bg-[#DCE8FF] border-l-4 border-blue-500";
  const yellowStyle = "bg-[#F7F6CF] border-l-4 border-yellow-400";
  const style =
    color === "blue"
      ? `${baseStyle} ${blueStyle}`
      : `${baseStyle} ${yellowStyle}`;

  return (
    <div className={style}>
      <p className="text-sm text-gray-600">{time}</p>
      <h4 className="mt-1 text-lg font-bold text-black">{title}</h4>
      <p className="text-sm text-gray-700">{company}</p>
    </div>
  );
};

export default function Schedule({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-lg bg-[#1C1C1C] p-6 text-white ${className}`}>
      <h3 className="text-xl font-bold">Today's Schedule</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {scheduleItems.map((item) => (
          <ScheduleItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
