import { useRef } from "react";

import { Text, useWindowDimensions, View } from "react-native";
import { Place, PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { style } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimentions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 278,
    max: dimentions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={style.indicator}
      backgroundStyle={style.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={style.content}
        ListHeaderComponent={() => (
          <Text style={style.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
