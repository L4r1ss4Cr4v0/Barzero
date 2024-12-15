import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { style } from "./styles";
import { colors } from "@/styles/theme";

type Props = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Info({ description, icon: Icon }: Props) {
  return (
    <View style={style.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={style.text}>{description}</Text>
    </View>
  );
}
