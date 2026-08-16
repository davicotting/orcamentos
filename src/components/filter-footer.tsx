import { View } from "react-native";
import { Button } from "./button";
import { useFilter } from "../context/filter-context";
import { useFilterStatusForm } from "../hooks/use-filter-status-form";

interface FilterFooterProps {
  closeSheetFn: () => void;
}

export function FilterFooter({ closeSheetFn }: FilterFooterProps) {
  const { resetBudgetList, resetSort, applyStatusList, resetStatus } = useFilter();
  const { reset, handleSubmit } = useFilterStatusForm();

  function handleResetFilter() {
    resetBudgetList();
    resetSort();
    resetStatus();
    reset();
  }

  const handleApplyChanges = handleSubmit(({ value }) => {
    applyStatusList(value);
    closeSheetFn();
  });

  return (
    <View className="absolute bottom-25 flex-row gap-3 px-16 py-5 border-t border-t-gray-secondary pb-5">
      <Button
        title="Resetar filtros"
        variant="secondary"
        onPress={handleResetFilter}
      />
      <Button title="Aplicar" icon="Check" onPress={handleApplyChanges}/>
    </View>
  );
}
