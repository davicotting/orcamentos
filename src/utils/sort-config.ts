import type { SORT } from "../types/sort";

export const sortConfig: Record<SORT, { label: string }> = {
  RECENT: { label: "Mais recente" },
  OLD: { label: "Mais antigo" },
  HIGH: { label: "Maior valor" },
  LOW: { label: "Menor valor" },
};
