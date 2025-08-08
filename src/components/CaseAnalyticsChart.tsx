import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { month: "Jan", active: 25, completed: 12, pending: 0 },
  { month: "Feb", active: 20, completed: 31, pending: 14 },
  { month: "Mar", active: 22, completed: 33, pending: 25 },
  { month: "Apr", active: 27, completed: 41, pending: 35 },
  { month: "May", active: 0, completed: 18, pending: 8 },
  { month: "Jun", active: 40, completed: 38, pending: 26 },
  { month: "Jul", active: 32, completed: 42, pending: 22 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLabel = (props: any) => {
  const { x, y, width, value } = props;
  if (!value) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="middle"
      className="text-xs font-bold"
    >
      {value}
    </text>
  );
};

export default function CaseAnalyticsChart() {
  const [timeRange, setTimeRange] = useState("1Y");
  const timeRanges = ["6M", "1Y", "ALL"];

  return (
    <div className="rounded-lg bg-[#1C1C1C] p-6 text-white">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Case Analytical Overview</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-[#DCE8FF]"></div>
            <span>Active Cases</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-[#E0F5D0]"></div>
            <span>Completed Cases</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-[#F7F6CF]"></div>
            <span>Pending Review</span>
          </div>
          <div className="flex gap-1 rounded-md border border-gray-600 p-0.5">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`rounded px-3 py-1 text-sm font-semibold ${
                  timeRange === range
                    ? "border border-green-400 bg-gray-800"
                    : "border-transparent"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0A0A0" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0A0A0" }}
              label={{
                value: "Units of measure",
                angle: -90,
                position: "insideLeft",
                fill: "#A0A0A0",
              }}
            />
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
              contentStyle={{ backgroundColor: "#333", border: "none" }}
            />
            <Bar dataKey="active" fill="#DCE8FF" radius={[10, 10, 0, 0]}>
              <LabelList dataKey="active" content={renderLabel} />
            </Bar>
            <Bar dataKey="completed" fill="#CCFFB2" radius={[10, 10, 0, 0]}>
              <LabelList dataKey="completed" content={renderLabel} />
            </Bar>
            <Bar dataKey="pending" fill="#F2F3B2" radius={[10, 10, 0, 0]}>
              <LabelList dataKey="pending" content={renderLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
