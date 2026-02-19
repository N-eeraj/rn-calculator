import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleOverrideCount = (value: string) => setCount(+value);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 20,
      }}
    >
    <TextInput
      value={`${count}`}
      placeholder="Override Count"
      style={{
        width: "80%",
        backgroundColor: "white",
        color: "#0af",
        outline: "1px solid #0af",
      }}
      onChangeText={handleOverrideCount} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}>
        <Button
          title="-"
          color="#0af"
          disabled={!count}
          onPress={handleDecrement} />
          <Text>
            {count}
          </Text>
        <Button
          title="+"
          color="#0af"
          onPress={handleIncrement} />
      </View>
    </View>
  );
}
