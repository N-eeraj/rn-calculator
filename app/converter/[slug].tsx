import Header from "@components/Converter/Header";
import { COLORS } from "@constants/theme";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export default function Converter() {
  const {
    params,
  } = useRoute();

  return (
    <View style={styles.container}>
      <Header />
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
