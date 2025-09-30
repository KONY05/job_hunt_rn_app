import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const getFavoriteJobsHelper = async (
  job_id?: string
): Promise<{
  alreadySaved: boolean;
  existingIds: string[];
}> => {
  try {
    const existingRaw = await AsyncStorage.getItem("favoriteJobs");
    const existingIds: string[] = existingRaw ? JSON.parse(existingRaw) : [];
    let alreadySaved = false;
    if (job_id) alreadySaved = existingIds.includes(job_id);
    return { alreadySaved, existingIds };
  } catch (error) {
    const err =
      error instanceof Error
        ? error.message
        : "An error occurred getting your favorite Jobs";
    Alert.alert("Error", err);
    return { alreadySaved: false, existingIds: [] };
  }
};
