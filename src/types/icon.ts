import * as LucideIcons from "lucide-react-native";
import { LucideIcon } from "lucide-react-native";

export type IconProps = {
  [K in keyof typeof LucideIcons]: (typeof LucideIcons)[K] extends LucideIcon
    ? K
    : never;
}[keyof typeof LucideIcons];