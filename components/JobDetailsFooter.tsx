import { useFavorite } from "@/context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function JobDetailsFooter({ job_id }: { job_id: string }) {
  const [favorite, setFavorite] = useState(false);

  const { favoriteJobIds, handleFavorites } = useFavorite();

  useEffect(() => {
    async function handleGetAlreadySaved() {
      const alreadySaved = favoriteJobIds.includes(job_id);

      if (alreadySaved) return setFavorite(true);
    }

    handleGetAlreadySaved();
  }, [job_id, favoriteJobIds]);

  // (async function () {
  //   const k = await AsyncStorage.getItem("favoriteJobs");

  //   console.log("here", k);
  // })();

  return (
    <View className="flex flex-row items-center absolute bottom-8 z-10 left-5 justify-center">
      <TouchableOpacity
        onPress={async () => {
          await handleFavorites(job_id);
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

      <TouchableOpacity className="rounded-xl p-3 bg-blue-600 flex-1">
        <Text className=" font-bold text-[16px] text-white">Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
}
