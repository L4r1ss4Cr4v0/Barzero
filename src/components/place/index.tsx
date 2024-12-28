import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableOpacityProps,
} from "react-native";

import { style } from "./styles";
import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import { router } from "expo-router";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => router.navigate(`/market/${data.id}`)}
    >
      <Image style={style.image} source={{ uri: data.cover }} />
      <View style={(style.container, { flexDirection: "column" })}>
        <Text style={style.name}>{data.name}</Text>
        <Text style={style.description} numberOfLines={2}>
          {data.description}
        </Text>

        <View style={style.footer}>
          <IconTicket size={16} color={colors.orange.flame} />
          <Text style={style.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
