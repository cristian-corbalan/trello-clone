export interface Board {
  id: number;
  title: string;
  background: BoardBackground;
  lastVisited?: Date;
}

export type BoardBackground = "white" | "blue" | "purple" | "red";
