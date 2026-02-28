import Input from "@components/Calculator/Display/Input";
import { COLORS } from "@constants/theme";
import { CalculatorContext } from "@contexts/Calculator";
import { use } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Display() {
  const {
    inputList,
    result,
    hasResult,
  } = use(CalculatorContext);
  console.log(inputList);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {inputList.length ? (
          inputList.map((input, index) => (
            <Input
              key={index}
              value={input} />
          ))
        ) : (
          <Input value="0" />
        )}
      </View>
      {hasResult && (
        <Text style={styles.result}>
          =&nbsp;{Intl.NumberFormat().format(result as number)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 12,
    backgroundColor: COLORS.background,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    columnGap: 4,
  },
  result: {
    fontSize: 48,
    color: COLORS.foreground,
  },
});
