export enum Interval {
  Monthly = "monthly",
  Weekly = "weekly",
  Daily = "daily",
}

export type InputParameter = {
  interval: Interval;
  message: string;
};

export type DependabotConfig = {
  version: number;
  updates: Array<{
    "package-ecosystem": string;
    directory: string;
    schedule: {
      interval: string;
    };
  }>;
};
