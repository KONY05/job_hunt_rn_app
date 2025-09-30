import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import HeaderText from "./HeaderText";
import SearchBar from "./SearchBar";

const job_types = ["Full-time", "Part-time", "Contractor", "Intern"];

export default function Welcome() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(job_types[0]);

  return (
    <View>
      <HeaderText text="Find your next dream job 👨‍💼" />

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
                  setActiveTab(job_types[index]);
                  router.push({
                    pathname: "/(screens)/search/[id]",
                    params: { id: item },
                  });
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
