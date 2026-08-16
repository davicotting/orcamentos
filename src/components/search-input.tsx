import { View, TextInput, TextInputProps } from "react-native";
import { IconProps } from "../types/icon";
import * as LucideIcons from "lucide-react-native";

interface SearchInputProps extends TextInputProps {
  icon?: IconProps;
  size?: number;
}

export function SearchInput({ icon, ...props }: SearchInputProps) {
  const IconComponent = icon ? LucideIcons[icon] : null;
  return (
    <View className="flex-1 rounded-full px-4 py-3.5 flex-row items-center bg-gray-quaternary border border-gray-secondary">
      {IconComponent ? <IconComponent size={24} color={"#4A4A4A"} /> : null}
      <TextInput
        {...props}
        placeholderTextColor="#4A4A4A"
        style={{
          flex: 1,
          color: "#000",
          paddingVertical: 0,
          marginLeft: 8,
        }}
      />
    </View>
  );
}
