import * as zod from "zod";
import { useFilter } from "../context/filter-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { SORT } from "../types/sort";

const schema = zod.object({
  value: zod.enum(["RECENT", "OLD", "HIGH", "LOW"]),
});

type SchemaType = zod.infer<typeof schema> & { value: SORT };

export function useFilterSortForm() {
  const { sort } = useFilter();

  const {
    control,
    formState: { errors },
    reset,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      value: sort,
    },
  });

  useEffect(() => {
    reset({ value: sort });
  }, [sort, reset]);

  return { control, errors, reset } as const;
}


