import { Text, View } from "react-native";
import { IconTicket } from "@tabler/icons-react-native";

import { style } from "./styles";
import { colors } from "@/styles/theme";

type Props = {
  code: string;
};

export function Coupon({ code }: Props) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Utilize esse cupon</Text>
      <View style={style.content}>
        <IconTicket size={24} color={colors.yellow.soft} />
        <Text style={style.code}>{code}</Text>
      </View>
    </View>
  );
}
