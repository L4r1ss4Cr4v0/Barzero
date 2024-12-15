import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    flex: 1,
    color: colors.gray[500],
    fontSize: 14,
    fontFamily: fontFamily.regular,
    lineHeight: 22.4,
  },
});
