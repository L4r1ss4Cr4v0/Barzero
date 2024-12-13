import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";

import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

//para fazer quabra no texto é {"\n"}

//ao usar o ts a vantagem é o alerta constante na tipagem, melhorando o código em pequenos detalhes que futuramente podem dar bugs E parar de ficar o a linha vermelha nos props

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    // posso fazer isso na estilização style={style.container, {backgroundColor: "red" }} (o background ficaria vermelho pois foi a ultima estilização)
    <TouchableOpacity
      activeOpacity={0.8}
      style={[s.container, style]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size={"small"} color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>;
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
