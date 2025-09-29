import { useState } from "react";
import { Text, View } from "react-native";

import SearchBar from "./SearchBar";

export default function Welcome() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <View className="flex gap-y-2 mb-6">
        <Text className="font-semibold text-2xl">Hello, User</Text>
        <Text className="font-medium text-gray-600">
          Find your next dream job
        </Text>
      </View>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </View>
  );
}
