import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function JobDetailsFooter({ job_id }: { job_id: string }) {
    const [favorite, setFavorite] = useState(false);
    

  return (
    <View className="flex flex-row items-center absolute bottom-0 z-10 left-5 justify-center">
      <TouchableOpacity
        onPress={(pressed) => {
          setFavorite(!favorite);
        }}
      >
        <Ionicons
          name={`${favorite ? "heart" : "heart-outline"}`}
          size={28}
          className="rounded-xl p-3"
          color={`${favorite ? "red" : "black"}`}
        />
      </TouchableOpacity>

      <TouchableOpacity className="rounded-xl p-3 bg-blue-400 flex-1">
        <Text className=" font-bold text-[16px] text-white">Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
}
