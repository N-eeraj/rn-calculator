import DisplayItem from "@components/Converter/Display/Item";
import { COLORS } from "@constants/theme";
import { ConverterContext } from "@contexts/Converter";
import { use } from "react";
import { StyleSheet, View } from "react-native";

export default function Display() {
  const {
    firstUnitItem,
    secondUnitItem,
    firstValue,
    secondValue,
    selectFirst,
    setSelectFirst,
    setFirstUnit,
    setSecondUnit,
  } = use(ConverterContext);

  return (
    <View style={styles.container}>
      <DisplayItem
        { ...firstUnitItem }
        isActive={selectFirst}
        value={firstValue}
        onUnitSelect={setFirstUnit}
        onValueSelect={() => setSelectFirst(true)} />

      <DisplayItem
        { ...secondUnitItem }
        isActive={!selectFirst}
        value={secondValue}
        onUnitSelect={setSecondUnit}
        onValueSelect={() => setSelectFirst(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    rowGap: 62,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
});
