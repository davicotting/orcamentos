import { Status } from "./status";

export interface Budget {
  id: string;
  company: string;
  role: string;
  status: Status;
  value: number;
}