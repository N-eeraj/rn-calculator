import { COLORS } from "@constants/theme";
import { useNavigation } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  const navigation = useNavigation();
  const handleBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.back}
        onPress={handleBack}>
        <ArrowLeft color={COLORS.foreground} />
      </Pressable>
      <Text style={styles.titleText}>
        {title}
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
