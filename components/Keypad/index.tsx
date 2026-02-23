import { AppContext } from "@/app/context";
import Button from "@/components/Keypad/Button";
import { use } from "react";
import { View } from "react-native";

function splitLastInput(inputList: Array<string>) {
  const inputListCopy = [...inputList];
  const lastValue = inputListCopy.pop();
  return {
    lastValue,
    remainingItems: inputListCopy,
    isLastValueNonNumeric: isNaN(lastValue as unknown as number),
  }
}

export default function Keypad() {
  const {
    setInputList,
  } = use(AppContext);

  const handleValuePress = (key: string) => setInputList((prev) => {
    if (!prev.length) return [key];

    const {
      lastValue,
      isLastValueNonNumeric,
      remainingItems,
    } = splitLastInput(prev);
    if (isLastValueNonNumeric) {
      return [...remainingItems, lastValue!, key];
    }

    return [...remainingItems, Number(lastValue + key).toString()];
  });

  const handleOperatorPress = (operator: string) => setInputList((prev) => [...prev, operator]);

  const handleClearDisplay = () => setInputList([]);

  const handleDeletePress = () => setInputList(prev => {
    const {
      lastValue,
      isLastValueNonNumeric,
      remainingItems,
    } = splitLastInput(prev);

    if (isLastValueNonNumeric || lastValue?.length === 1) {
      return [...remainingItems]
    }
    return [...remainingItems, lastValue!.slice(0, -1)]
  });

  return (
    <View
      style={{
        flex: 3,
        display: "flex",
        gap: 4,
        backgroundColor: "#171717",
      }}>
      
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button
          title="C"
          color="#3cf"
          onPress={handleClearDisplay} />
        <Button
          title="⌫"
          color="#3cf"
          onPress={handleDeletePress} />
        <Button
          title="%"
          color="#3cf" />
        <Button
          title="÷"
          color="#3cf"
          onPress={() => handleOperatorPress("÷")} />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button
          title="7"
          onPress={() => handleValuePress("7")} />
        <Button
          title="8"
          onPress={() => handleValuePress("8")} />
        <Button
          title="9"
          onPress={() => handleValuePress("9")} />
        <Button
          title="×"
          color="#3cf"
          onPress={() => handleOperatorPress("×")} />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button
          title="4"
          onPress={() => handleValuePress("4")} />
        <Button
          title="5"
          onPress={() => handleValuePress("5")} />
        <Button
          title="6"
          onPress={() => handleValuePress("6")} />
        <Button
          title="-"
          color="#3cf"
          onPress={() => handleOperatorPress("-")} />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button
          title="1"
          onPress={() => handleValuePress("1")} />
        <Button
          title="2"
          onPress={() => handleValuePress("2")} />
        <Button
          title="3"
          onPress={() => handleValuePress("3")} />
        <Button
          title="+"
          color="#3cf"
          onPress={() => handleOperatorPress("+")} />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          columnGap: 12,
        }}>
        <View style={{ flex: 1 }} />
        <Button
          title="0"
          onPress={() => handleValuePress("0")} />
        <Button
          title="." />
        <Button
          title="="
          color="white"
          backgroundColor="#3cf" />
      </View>
    </View>
  );
}
