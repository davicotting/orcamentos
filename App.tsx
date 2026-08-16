import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FilterProvider } from "./src/context/filter-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <FilterProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Routes />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </FilterProvider>
    </SafeAreaProvider>
  );
}
