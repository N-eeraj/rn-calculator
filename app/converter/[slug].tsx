import Display from "@components/Converter/Display";
import Header from "@components/Converter/Header";
import Keypad from "@components/Converter/Keypad";
import MEASUREMENT_TYPES from "@constants/measurementTypes";
import { COLORS } from "@constants/theme";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

interface RouteProps extends RouteProp<ParamListBase> {
  params: {
    slug: string;
  }
}

export default function Converter() {
  const {
    params,
  } = useRoute<RouteProps>();

  const {
    text: title,
    units,
  } = MEASUREMENT_TYPES.find(({ slug }) => slug === params.slug)!;

  return (
    <View style={styles.container}>
      <Header title={title} />
      <Display />
      <Keypad />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  text: {
    color: COLORS.foreground,
  },
});
