import { AppContext } from "@/app/context";
import { use } from "react";
import {
  Text,
  View,
} from "react-native";
import Input from "./Input";

export default function Display() {
  const {
    inputList,
    result,
    hasResult,
  } = use(AppContext);
  console.log(inputList);

  return (
    <View
      style={{
        flex: 2,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 12,
        backgroundColor: "#111",
      }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          columnGap: 4,
        }}>
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
        <Text
          style={{
            fontSize: 48,
            color: "white",
          }}>
          =&nbsp;{Intl.NumberFormat().format(result as number)}
        </Text>
      )}
    </View>
  );
}
