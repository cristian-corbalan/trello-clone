export interface Board {
  id: number;
  title: string;
  background: BoardBackgroundName;
  lastVisited?: Date;
}

export type BoardBackgroundName = "white" | "blue" | "purple" | "red";

export interface BoardBackground {
  name: string;
  className: string;
}
