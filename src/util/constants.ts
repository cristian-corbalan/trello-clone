import type { BoardBackground, BoardBackgroundName } from "../types/types.ts";

export const BOARD_BACKGROUNDS: Record<BoardBackgroundName, BoardBackground> = {
  white: { name: "Blanco", className: "bg-gray-400" },
  blue: { name: "Azul", className: "bg-blue-500" },
  red: { name: "Rojo", className: "bg-red-500" },
  purple: { name: "Púrpura", className: "bg-purple-500" },
};
