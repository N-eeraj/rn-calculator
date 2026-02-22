import Button from "@/components/Keypad/Button";
import { View } from "react-native";

export default function Keypad() {
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
          color="#3cf" />
        <Button
          title="⌫"
          color="#3cf" />
        <Button
          title="%"
          color="#3cf" />
        <Button
          title="÷"
          color="#3cf" />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button title="9" />
        <Button title="8" />
        <Button title="7" />
        <Button
          title="×"
          color="#3cf" />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button title="6" />
        <Button title="5" />
        <Button title="4" />
        <Button
          title="-"
          color="#3cf" />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          columnGap: 12,
        }}>
        <Button title="3" />
        <Button title="2" />
        <Button title="1" />
        <Button
          title="+"
          color="#3cf" />
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
        <Button title="0" />
        <Button title="." />
        <Button
          title="="
          color="white"
          backgroundColor="#3cf" />
      </View>
    </View>
  );
}
