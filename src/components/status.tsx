import { View, Text } from "react-native";
import type { Status as StatusType } from "../types/status";
import { statusConfig } from "../utils/status-config";

interface StatusProps {
  status: StatusType;
}

export function Status({ status }: StatusProps) {
  const { bg, dot, text, label } = statusConfig[status];

  return (
    <View className={`p-2 rounded-md ${bg}`}>
      <View className="flex-row gap-1 items-center">
        <View className={`h-2 w-2 aspect-square rounded-full ${dot}`} />
        <Text className={`${text} font-bold`}>{label}</Text>
      </View>
    </View>
  );
}
