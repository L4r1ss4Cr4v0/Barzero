import { Image, Text, View } from "react-native";

import { style } from "./styles";

//para fazer quabra no texto é {"\n"}

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
      <Text style={style.title}>Bem vindo ao Barzêiro!</Text>
      <Text style={style.subtitle}>
        Venha conhecer os melhores barzinhos de BH perto de você.
      </Text>
    </View>
  );
}
