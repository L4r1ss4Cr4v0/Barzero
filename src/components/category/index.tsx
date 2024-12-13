import { Pressable, PressableProps, Text } from "react-native";

import { style } from "./styles";
import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";

type Props = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category({ iconId, name, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={[style.container, isSelected && style.cointainerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 300]} />
      <Text style={[style.name, isSelected && style.nameSelected]}>{name}</Text>
    </Pressable>
  );
}
