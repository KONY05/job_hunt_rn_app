import { Text, View } from "react-native";

export default function HeaderText({ text }: { text: string }) {
  return (
    <View className="flex gap-y-2 mb-6 bg-blue-600 rounded-xl p-5 ">
      <Text className="font-semibold text-2xl text-white">Hello, User</Text>
      <Text className="font-medium text-gray-300">{text}</Text>
    </View>
  );
}
