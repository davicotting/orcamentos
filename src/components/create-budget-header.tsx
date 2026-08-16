import { View, Text } from "react-native";
import { Button } from "./button";
import { StackRoutesProps } from "../routes/stack-routes";

type CreateBudgetHeaderProps = Pick<
  StackRoutesProps<"createBudget">,
  "navigation"
>;

export function CreateBudgetHeader({ navigation }: CreateBudgetHeaderProps) {
  function handleGoBackToHome() {
    navigation.navigate("home");
  }

  return (
    <View className="flex-row items-center p-5">
      <Button icon="ChevronLeft" variant="ghost" onPress={handleGoBackToHome} />
      <Text className="font-bold text-sm">Orçamentos</Text>
    </View>
  );
}
