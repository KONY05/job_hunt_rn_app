import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import SearchBar from "./SearchBar";

const job_types = ["Full-time", "Part-time", "Contractor", "Intern"];

export default function Welcome() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(job_types[0]);

  return (
    <View>
      <View className="flex gap-y-2 mb-6 bg-blue-600 rounded-xl p-5 ">
        <Text className="font-semibold text-2xl text-white">Hello, User</Text>
        <Text className="font-medium text-gray-300">
          Find your next dream job 👨‍💼
        </Text>
      </View>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <View className="mt-4">
        <FlatList
          data={job_types}
          renderItem={({ item, index }) => {
            const isActive = item === activeTab;
            return (
              <TouchableOpacity
                className={`p-2 rounded-xl ${isActive && "bg-blue-600"}`}
                onPress={() => {
                  setActiveTab(item);
                  router.push(`/(screens)/search/${activeTab}`);
                }}
              >
                <Text className={`font-medium ${isActive && "text-white"}`}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          horizontal
          contentContainerClassName="gap-3"
        />
      </View>
    </View>
  );
}
