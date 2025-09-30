import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}) {
  const router = useRouter();

  return (
    <View className="flex flex-row border rounded-xl px-2">
      <TextInput
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Search for that next opportunity"
        className="placeholder::font-semibold py-3  font-medium flex-1"
      />

      {searchTerm && <View className="justify-center items-center">
        <TouchableOpacity
          onPress={() => router.push(`/(screens)/search/${searchTerm}`)}
        >
          <Ionicons name={"search"} size={26} color="black" />
        </TouchableOpacity>
      </View>}
    </View>
  );
}
