import Button from "@components/Calculator/Keypad/Button";
import { COLORS } from "@constants/theme";
import useKeypadButtons from "@hooks/useKeypadButtons";
import { StyleSheet, View } from "react-native";

export default function Keypad() {
  const keypad = useKeypadButtons();

  return (
    <View style={styles.container}>

      {keypad.map((keys, rowIndex) => (
        <View
          key={rowIndex}
          style={styles.row}>
          {keys.map((key, columnIndex) => (
            key
            ?  <Button
                key={`${rowIndex}.${columnIndex}`}
                {...key} />
            : <View
                key={`${rowIndex}.${columnIndex}`}
                style={styles.blank} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: "flex",
    gap: 4,
    backgroundColor: COLORS.surface,
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: 12,
  },
  blank: {
    flex: 1,
  },
});
