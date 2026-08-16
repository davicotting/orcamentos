import { View, Text } from "react-native";
import type { SORT } from "../types/sort";
import { sortConfig } from "../utils/sort-config";

interface SortLabelProps {
  sort: SORT;
}

export function SortLabel({ sort }: SortLabelProps) {
  const { label } = sortConfig[sort];

  return (
    <View>
      <Text className="text-gray-quintenary">{label}</Text>
    </View>
  );
}
