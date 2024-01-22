export enum Interval {
  Monthly = "monthly",
  Weekly = "weekly",
  Daily = "daily",
}

export type InputParameter = {
  interval: Interval;
  message: string;
};
