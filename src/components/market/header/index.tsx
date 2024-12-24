import { View, Text, Linking } from "react-native";
import { style } from "./styles";
import { IconReceipt } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";

type Props = {
  name: string;
  description: string;
  menu: string;
};

// In future, adding "menu" in Props AND API

export function Header({ name, description, menu }: Props) {
  return (
    <View style={style.container}>
      <View style={style.texts}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
      <Button
        style={{ width: 55, height: 55 }}
        onPress={() => Linking.openURL(menu)}
      >
        <Button.Icon icon={IconReceipt} />
      </Button>
    </View>
  );
}
