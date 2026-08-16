import { useMemo, useRef } from "react";
import { Button } from "./button";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { Text, View, TouchableOpacity } from "react-native";
import { X } from "lucide-react-native";
import { FilterSection } from "./filter-section";
import { FilterFooter } from "./filter-footer";

export function Filter() {
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["70%"], []);

  function handleOpenSheet() {
    sheetRef.current?.present();
  }

  function handleCloseSheet() {
    sheetRef.current?.dismiss();
  }
  return (
    <>
      <Button
        icon="SlidersHorizontal"
        format="full-rounded"
        variant="secondary"
        onPress={handleOpenSheet}
      />
      <BottomSheetModal
        ref={sheetRef}
        animationConfigs={{
          damping: 80,
          mass: 1,
          stiffness: 100,
        }}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="close"
          />
        )}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <View>
            <View className="p-5 items-center justify-between flex-row flex-1 w-full border-b border-b-gray-secondary pb-5">
              <Text className="font-bold text-sm">Filtrar e ordenar</Text>

              <TouchableOpacity onPress={handleCloseSheet}>
                <X size={24} />
              </TouchableOpacity>
            </View>

            <FilterSection />
          </View>
        </BottomSheetView>
        <FilterFooter closeSheetFn={handleCloseSheet}/>
      </BottomSheetModal>
    </>
  );
}
