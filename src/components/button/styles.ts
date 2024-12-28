import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxHeight: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.yellow.base,
    borderRadius: 10,
    gap: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
  },
});
