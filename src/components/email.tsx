import { Pressable, Text, View } from "react-native";
import { Avatar } from "./avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { EmailDataProps } from "@/utils/emails";
import { useState } from "react";

type EmailProps = {
  data: EmailDataProps;
};
export function Email({ data }: EmailProps) {
  const [star, setStar] = useState(false);
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} />
      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]}
            />
          )}

          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
          </Text>
          <Text className="text-sm font-body text-gray-400">18 de Jul.</Text>
        </View>
        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>
        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>
          <Pressable onPress={() => setStar(!star)}>
            <MaterialIcons
              name={star ? "star" : "star-outline"}
              size={22}
              color={star ? colors.yellow[600] : colors.blue[600]}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
