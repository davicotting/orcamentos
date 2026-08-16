import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { CreateBudget } from "../app/create-budget";
import { Home } from "../app/home";

export type StackListProps = {
  home: undefined;
  createBudget: undefined;
};

export interface StackRoutesProps<
  Route extends keyof StackListProps,
> extends NativeStackScreenProps<StackListProps, Route> {}

const Stack = createNativeStackNavigator<StackListProps>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="createBudget" component={CreateBudget} />
    </Stack.Navigator>
  );
}
