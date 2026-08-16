import { Header } from "../components/header";
import { BudgetSection } from "../components/budget-section";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackRoutesProps } from "../routes/stack-routes";

export function Home({ navigation }: StackRoutesProps<"home">) {
  return (
    <SafeAreaView className="bg-white h-screen">
      <Header navigation={navigation} />
      <BudgetSection />
    </SafeAreaView>
  );
}
