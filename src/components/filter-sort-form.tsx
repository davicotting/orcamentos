import { View } from "react-native";
import { SORT_LIST } from "../utils/mocks/sort-list";
import { Controller } from "react-hook-form";
import { Host, RadioButton } from "@expo/ui/jetpack-compose";
import { SortLabel } from "./sort-label";
import { useFilterSortForm } from "../hooks/use-filter-sort-form";
import { useFilter } from "../context/filter-context";

export function FilterSortForm() {
  const { control } = useFilterSortForm();
  const { updateSort, sort } = useFilter();
  return (
    <>
      {SORT_LIST.map((sortItem) => (
        <Controller
          key={sortItem}
          name="value"
          control={control}
          render={({ field: { value, onChange } }) => (
            <View key={sortItem} className="flex-row items-center">
              <Host matchContents style={{height: 100}}>
                <RadioButton
                selected={sort === sortItem}
                onClick={() => { onChange(sortItem); updateSort(sortItem); }}
                />
              </Host>
              <SortLabel sort={sortItem} />
            </View>
          )}
        />
      ))}
    </>
  );
}
