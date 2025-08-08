import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 312, color: "#CCFFB2" },
  { name: "Active", value: 138, color: "#DCE8FF" },
  { name: "Pending review", value: 78, color: "#DDDD7F" },
  { name: "On Hold", value: 52, color: "#F2F3B2" },
];

export default function CaseDistributionChart({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`rounded-lg bg-[#1C1C1C] p-6 text-white ${className}`}>
      <h3 className="text-xl font-bold">Case Stats Distribution</h3>
      <div className="mt-4 flex items-center justify-around gap-4">
        <div className="h-80 w-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.value} cases</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
