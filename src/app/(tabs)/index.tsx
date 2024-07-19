import { Input } from "@/components/input";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p4">
      <Input>
        <Input.Field placeholder="Pesquisar no e-mail" />
      </Input>
    </View>
  );
}
