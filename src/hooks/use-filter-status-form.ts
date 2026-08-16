import * as zod from "zod";
import { useFilter } from "../context/filter-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const schema = zod.object({
  value: zod
    .array(zod.enum(["DRAFT", "SENT", "APPROVED", "REJECTED"]))
    .min(1, "Selecione ao menos um status"),
});

type SchemaType = zod.infer<typeof schema>;

export function useFilterStatusForm() {
  const { statusList } = useFilter();

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      value: statusList,
    },
  });

  useEffect(() => {
    reset({ value: statusList });
  }, [statusList, reset]);

  return { control, errors, reset, handleSubmit };
}


