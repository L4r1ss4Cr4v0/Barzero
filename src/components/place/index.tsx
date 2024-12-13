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

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  adress: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={style.container}>
      <Image style={style.image} source={{ uri: data.cover }} />
      <View style={(style.container, { flexDirection: "column" })}>
        <Text style={style.name}>{data.name}</Text>
        <Text style={style.description}>{data.description}</Text>

        <View style={style.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={style.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
