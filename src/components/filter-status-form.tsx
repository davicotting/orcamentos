import { Checkbox, Host } from "@expo/ui";
import { View } from "react-native";
import { Status } from "./status";
import { Controller } from "react-hook-form";
import { useFilter } from "../context/filter-context";
import { STATUS_LIST } from "../utils/mocks/status-list";
import { useFilterStatusForm } from "../hooks/use-filter-status-form";

export function FilterStatusForm() {
  const { updateStatusList } = useFilter();
  const { control } = useFilterStatusForm();
  return (
    <>
      {STATUS_LIST.map((status) => (
        <Controller
          key={status}
          name="value"
          control={control}
          render={({ field: { value, onChange } }) => (
            <View key={status} className="flex-row items-center">
              <Host matchContents>
                <Checkbox
                  value={value.includes(status)}
                  onValueChange={(checked) => {
                    onChange(updateStatusList(checked, status));
                  }}
                />
              </Host>
              <Status status={status} />
            </View>
          )}
        />
      ))}
    </>
  );
}
