import MEASUREMENT_TYPES from "@constants/measurementTypes";
import { COLORS } from "@constants/theme";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface RouteProps extends RouteProp<ParamListBase> {
  params: {
    slug: string;
  }
}

export default function Header() {
  const {
    params,
  } = useRoute<RouteProps>();

  const navigation = useNavigation();
  const handleBack = () => navigation.goBack();

  const {
    text: measurementName,
  } = MEASUREMENT_TYPES.find(({ slug }) => slug === params.slug)!;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.back}
        onPress={handleBack}>
        <ArrowLeft color={COLORS.foreground} />
      </Pressable>
      <Text style={styles.titleText}>
        {measurementName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    backgroundColor: COLORS.background,
  },
  titleText: {
    color: COLORS.foreground,
    fontSize: 20,
    fontWeight: 600,
  },
  back: {
    position: "absolute",
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    aspectRatio: 1,
  },
});
