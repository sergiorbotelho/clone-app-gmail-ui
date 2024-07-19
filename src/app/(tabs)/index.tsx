import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
      </Input>
    </View>
  );
}
