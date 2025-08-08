import { ChartLineIcon } from "lucide-react";
import { Change, CardVariant, type CardProps } from "./Card.types";

const cardStyles = {
  [CardVariant.BLUE]: {
    wrapper: "bg-[#DCE8FF] border-l-8 border-blue-600",
    iconWrapper: "bg-blue-600",
  },
  [CardVariant.YELLOW]: {
    wrapper: "bg-[#F7F6CF] border-l-8 border-yellow-400",
    iconWrapper: "bg-yellow-400",
  },
};

export default function Card({
  title,
  value,
  percentage,
  periodText,
  icon,
  variant,
  change = Change.UP,
}: CardProps) {
  const styles = cardStyles[variant];

  return (
    <div
      className={`flex w-full justify-between rounded-2xl p-5 ${styles.wrapper}`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-5xl font-bold text-black">{value}</p>
        <div className="flex w-fit items-center gap-1 rounded-md bg-[#CCFFB2] px-2 py-1">
          <ChartLineIcon className="h-4 w-4 text-black" />
          <span className="text-sm font-semibold text-black">
            {change === Change.UP ? "+" : "-"}
            {percentage}% {periodText}
          </span>
        </div>
      </div>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconWrapper}`}
      >
        {icon}
      </div>
    </div>
  );
}
