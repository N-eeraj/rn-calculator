import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function Converter() {
  const {
    params,
  } = useRoute();

  return (
    <View>
      <Text>
        {params?.slug}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
