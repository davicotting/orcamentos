import { View, Text } from "react-native";
import { FilterStatusForm } from "./filter-status-form";
import { FilterSortForm } from "./filter-sort-form";

export function FilterSection() {
  return (
    <View className="text-gray-quintenary p-5">
      <View>
        <Text className="text-gray-quintenary">Status</Text>
        <FilterStatusForm />
      </View>
      <View>
        <Text className="text-gray-quintenary">Status</Text>
        <FilterSortForm />
      </View>
    </View>
  );
}
