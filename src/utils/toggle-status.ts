import { Status } from "../types/status";

export function toggleStatus(checked: boolean, status: Status, current: Status[]): Status[] {
  return checked
    ? [...current, status]
    : current.filter((s) => s !== status);
}