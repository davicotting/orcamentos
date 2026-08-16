import type { Status } from "../types/status";

export const statusConfig: Record<
  Status,
  { bg: string; dot: string; text: string; label: string }
> = {
  APPROVED: {
    bg: "bg-success-secondary",
    dot: "bg-success-primary",
    text: "text-success-primary",
    label: "Aprovado",
  },
  DRAFT: {
    bg: "bg-gray-primary",
    dot: "bg-gray-quintenary",
    text: "text-gray-quintenary",
    label: "Rascunho",
  },
  REJECTED: {
    bg: "bg-red-primary",
    dot: "bg-red-secondary",
    text: "text-red-secondary",
    label: "Reprovado",
  },
  SENT: {
    bg: "bg-blue-primary",
    dot: "bg-blue-secondary",
    text: "text-blue-secondary",
    label: "Enviado",
  },
};
