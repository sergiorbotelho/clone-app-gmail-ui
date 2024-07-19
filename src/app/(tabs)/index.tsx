import { View } from "react-native";

import { Avatar } from "@/components/avatar";
import { Email } from "@/components/email";
import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: "https://github.com/sergiorbotelho.png" }}
          size="small"
        />
      </Input>
      <Email />
    </View>
  );
}
