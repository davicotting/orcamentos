import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import * as LucideIcons from "lucide-react-native";
import { IconProps } from "../types/icon";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: IconProps;
  size?: number;
  format?: "pill" | "full-rounded";
  variant?: "primary" | "secondary";
}

export function Button({
  title,
  icon,
  size = 24,
  format,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const IconComponent = icon ? LucideIcons[icon] : null;
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.9}
      className={`p-3 rounded-full
        ${format === "full-rounded" && "aspect-square"} 
        ${variant === "primary" && " bg-purple-primary gap-2 flex-row items-center w-max justify-center"}
        ${variant === "secondary" && " bg-gray-quaternary gap-2 flex-row items-center w-max justify-center border border-gray-secondary"}
      `}
    >
      {IconComponent ? (
        <IconComponent
          size={size}
          color={variant === "primary" ? "#fff" : "#6a46eb"}
        />
      ) : null}
      {title ? (
        <Text
          className={`${variant === "secondary" ? "text-purple-primary" : "text-white"} font-bold text-sm`}
        >
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}
