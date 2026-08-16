import { Text, View } from "react-native";
import { Button } from "./button";
import { StackRoutesProps } from "../routes/stack-routes";

type HeaderProps = Pick<StackRoutesProps<"home">, "navigation">;

export function Header({ navigation }: HeaderProps) {
  function handleRedirectToCreateBudgetPage(){
    navigation.navigate("createBudget")
  }
  return (
    <View className="p-4 gap-4 flex-row justify-between border-b border-b-gray-secondary pb-5">
      <View className="gap-0.5">
        <Text className="text-purple-primary text-lg font-bold">
          Orçamentos
        </Text>
        <Text className="text-secondary text-sm">
          Você tem 1 item em rascunho
        </Text>
      </View>

      <Button title="Novo" icon="Plus" onPress={handleRedirectToCreateBudgetPage}/>
    </View>
  );
}
