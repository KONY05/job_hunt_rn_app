import { getFavoriteJobsHelper } from "@/utils/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

type FavoriteContextType = {
  favoriteJobIds: string[];
  handleFavorites: (job_id: string) => Promise<void>;
};

const initialValue: string[] = [];

const FavoritesContext = createContext({} as FavoriteContextType);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteJobIds, setFavoriteJobIds] = useState(initialValue);

  useEffect(() => {
    async function handleGetFavorites() {
      const { existingIds } = await getFavoriteJobsHelper();
        setFavoriteJobIds(() => [...existingIds]);
    }

    handleGetFavorites();
  }, []);
    

  async function handleFavorites(job_id: string) {
    try {
      const { alreadySaved, existingIds } = await getFavoriteJobsHelper(job_id);

      if (!alreadySaved) {
        const updatedIds = [...existingIds, job_id];

        setFavoriteJobIds(() => [...updatedIds]);
        await AsyncStorage.setItem("favoriteJobs", JSON.stringify(updatedIds));
      } else {
        const updatedIds = existingIds.filter((id) => id !== job_id);
        setFavoriteJobIds(() => [...updatedIds]);
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

  return (
    <FavoritesContext.Provider value={{ favoriteJobIds, handleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoritesContext);
  if (context === undefined)
    throw new Error("FavoriteContext was used outside the FavoriteProvider");

  return context;
}
