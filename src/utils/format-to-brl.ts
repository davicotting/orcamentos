interface FormatToBRLProps {
  value: number;
}

interface FormatToBRLResponse {
  value: string;
}

export function formatToBRL({ value }: FormatToBRLProps): FormatToBRLResponse {
  value.toString();
  const valueFormatedToBRL = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return {
    value: String(valueFormatedToBRL),
  };
}
