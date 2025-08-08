import type { ReactNode } from "react";

export enum Change {
  UP = "up",
  DOWN = "down",
}

export enum CardVariant {
  BLUE = "blue",
  YELLOW = "yellow",
}

export type CardProps = {
  title: string;
  value: string | number;
  percentage: number;
  periodText: string;
  icon: ReactNode;
  variant: CardVariant;
  change?: Change;
};
