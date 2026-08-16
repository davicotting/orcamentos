import { FlatList, View } from "react-native";
import { SearchInput } from "./search-input";
import { Filter } from "./filter";
import { Budget } from "./budget";
import { Empty } from "./empty";
import { useFilter } from "../context/filter-context";

export function BudgetSection() {
  const { budgetList, setSearch } = useFilter();
  return (
    <View className="p-4">
      <View className="flex-row gap-2 h-12">
        <SearchInput placeholder="Título ou cliente" icon="Search" onChangeText={setSearch} />
        <Filter />
      </View>

      <FlatList
        contentContainerStyle={{ gap: 12, marginTop: 24 }}
        data={budgetList}
        keyExtractor={(budget) => budget.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={Empty}
        renderItem={({ item: { company, role, status, value } }) => (
          <Budget company={company} role={role} status={status} value={value} />
        )}
      />
    </View>
  );
}
