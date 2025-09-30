import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function JobDetailsFooter({ job_id }: { job_id: string }) {
  const [favorite, setFavorite] = useState(false);

  const getFavoriteJobs = useCallback(async (): Promise<{
    alreadySaved: boolean;
    existingIds: string[];
  }> => {
    try {
      const existingRaw = await AsyncStorage.getItem("favoriteJobs");
      const existingIds: string[] = existingRaw ? JSON.parse(existingRaw) : [];
      const alreadySaved = existingIds.includes(job_id);
      return { alreadySaved, existingIds };
    } catch (error) {
      const err =
        error instanceof Error
          ? error.message
          : "An error occurred getting your favorite Jobs";
      Alert.alert("Error", err);
      return { alreadySaved: false, existingIds: [] };
    }
  }, [job_id]);

  useEffect(() => {
    async function handleGetFavoriteJobs() {
      const { alreadySaved } = await getFavoriteJobs();

      if (alreadySaved) return setFavorite(true);
    }

    handleGetFavoriteJobs();
  }, [job_id, getFavoriteJobs]);

  async function handleFavoritesBtnClick() {
    try {
      const { alreadySaved, existingIds } = await getFavoriteJobs();

      if (!alreadySaved) {
        const updatedIds = [...existingIds, job_id];

        await AsyncStorage.setItem("favoriteJobs", JSON.stringify(updatedIds));
      } else {
        const updatedIds = existingIds.filter((id) => id !== job_id);
        await AsyncStorage.setItem("favoriteJobs", JSON.stringify(updatedIds));
      }
    } catch (error) {
      const err =
        error instanceof Error
          ? error.message
          : "An error occurred handling the favorites functionality";
      Alert.alert("Error", err);
    }
  }

  // (async function () {
  //   const k = await AsyncStorage.getItem("favoriteJobs");

  //   console.log("here", k);
  // })();

  return (
    <View className="flex flex-row items-center absolute bottom-8 z-10 left-5 justify-center">
      <TouchableOpacity
        onPress={async () => {
          await handleFavoritesBtnClick();
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
