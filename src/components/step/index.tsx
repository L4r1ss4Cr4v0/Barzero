import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { style } from "./styles";
import { colors } from "@/styles/theme";

//para fazer quabra no texto é {"\n"}

//ao usar o ts a vantagem é o alerta constante na tipagem, melhorando o código em pequenos detalhes que futuramente podem dar bugs E parar de ficar o a linha vermelha nos props

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={style.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={style.datails}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
    </View>
  );
}
