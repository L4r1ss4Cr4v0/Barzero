import { ActivityIndicator } from "react-native";

import { style } from "./styles";
import { colors } from "@/styles/theme";

export function Loading() {
  return (
    <ActivityIndicator color={colors.yellow.base} style={style.container} />
  );
}
