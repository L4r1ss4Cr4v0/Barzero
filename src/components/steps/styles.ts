import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
