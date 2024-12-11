import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";
import { red } from "react-native-reanimated/lib/typescript/Colors";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  datails: {
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
