import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Status } from "../types/status";
import type { SORT } from "../types/sort";
import { toggleStatus } from "../utils/toggle-status";
import { budgets } from "../utils/mocks/budget";
import { Budget } from "../types/budget";

interface FilterContextProps {
  updateStatusList: (checked: boolean, status: Status) => Status[];
  applyStatusList: (statusList: Status[]) => void;
  budgetList: Budget[];
  statusList: Status[];
  resetBudgetList: () => void;
  sort: SORT;
  updateSort: (sort: SORT) => void;
  resetSort: () => void;
  search: string;
  setSearch: (search: string) => void;
  resetStatus: () => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [statusList, setStatusList] = useState<Status[]>(["DRAFT"]);
  const [sort, setSort] = useState<SORT>("RECENT");
  const [search, setSearch] = useState<string>("");

  function updateStatusList(checked: boolean, status: Status): Status[] {
    const updated = toggleStatus(checked, status, statusList);
    setStatusList(updated);

    return updated;
  }

  function resetBudgetList() {
    setStatusList([]);
  }

  function applyStatusList(newStatusList: Status[]) {
    setStatusList(newStatusList);
  }

  function updateSort(sortValue: SORT) {
    setSort(sortValue);
    return sortValue;
  }

  function resetSort() {
    setSort("RECENT");
  }

  function resetStatus() {
    setStatusList(["DRAFT"]);
  }

  const budgetList = budgets
    .filter((budget) => {
      const matchesStatus =
        statusList.length === 0 || statusList.includes(budget.status);

      const query = search.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        budget.company.toLowerCase().includes(query) ||
        budget.role.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      switch (sort) {
        case "HIGH":
          return b.value - a.value;
        case "LOW":
          return a.value - b.value;
        case "OLD":
          return Number(a.id) - Number(b.id);
        case "RECENT":
        default:
          return Number(b.id) - Number(a.id);
      }
    });

  const value = {
    updateStatusList,
    applyStatusList,
    budgetList,
    statusList,
    resetBudgetList,
    sort,
    updateSort,
    resetSort,
    search,
    setSearch,
    resetStatus
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter precisa estar dentro de um FilterProvider");
  }

  return context;
}
