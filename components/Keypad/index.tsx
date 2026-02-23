import Button from "@/components/Keypad/Button";
import useKeypadButtons from "@/hooks/useKeypadButtons";
import { View } from "react-native";

export default function Keypad() {
  const {
    handleValuePress,
    handleOperatorPress,
    handleDeletePress,
    handleClearDisplay,
    handlePercentagePress,
    handleEquatePress,
  } = useKeypadButtons();

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
          variant="tinted"
          onPress={handleClearDisplay} />
        <Button
          title="⌫"
          variant="tinted"
          onPress={handleDeletePress} />
        <Button
          title="%"
          variant="tinted"
          onPress={handlePercentagePress} />
        <Button
          title="÷"
          variant="tinted"
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
          variant="tinted"
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
          variant="tinted"
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
          variant="tinted"
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
          variant="solid"
          onPress={handleEquatePress} />
      </View>
    </View>
  );
}
