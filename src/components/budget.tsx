import { View, Text } from "react-native";
import type { Budget as BudgetType } from "../types/budget";
import { Status } from "./status";

type BudgetProps = Omit<BudgetType, "id">;

export function Budget({ company, role, status, value }: BudgetProps) {
  return (
    <View className="flex-row justify-between border border-gray-secondary bg-gray-quaternary p-4 rounded-xl">
      <View className="gap-2 max-w-53.5 justify-between">
        <Text className="text-base text-primary font-bold">{company}</Text>
        <Text className="text-secondary text-sm">{role}</Text>
      </View>

      <View className="justify-between gap-8">
        <Status status={status} />
        <View className="flex-row items-center gap-1">
          <Text className="text-xs">R$</Text>
          <Text className="font-bold text-base">
            {value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>
    </View>
  );
}
