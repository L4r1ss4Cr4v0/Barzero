// responsavel pelas rotas
// executa primeiro, devido a navegação

import { Stack } from "expo-router";
import { colors } from "@/styles/theme";
import { Loading } from "@/components/loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  useFonts,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";

export default function Layout() {
  const [fontsLoded] = useFonts({
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] },
        }}
      />
    </GestureHandlerRootView>
  ); //faz um cabeçalho, mas com o screanOptiions e headerShown false ele desaparece
}
