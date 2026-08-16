import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateBudgetHeader } from "../components/create-budget-header";
import { StackRoutesProps } from "../routes/stack-routes";

export function CreateBudget({ navigation }: StackRoutesProps<"createBudget">) {
  return (
    <SafeAreaView className="bg-white h-screen">
      <View>
        <CreateBudgetHeader navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
