import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderText from "@/components/HeaderText";
import JobContainer from "@/components/JobContainer";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { useFavorite } from "@/context/FavoritesContext";
import { jobs } from "@/utils/constants";

export default function Favorites() {
  const { favoriteJobIds } = useFavorite();

  const favoriteJobs = jobs.filter((job) =>
    favoriteJobIds.includes(job.job_id)
  );
  


  return (
    <SafeAreaView className="bg-[#FAFAFC] flex-1">
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <ScreenHeaderBtn icon="arrow-back" linkTo="/(screens)" />;
          },
          headerBackVisible: false,
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#FAFAFC" },
        }}
      />
      <ScrollView className="px-6 -mt-8" showsVerticalScrollIndicator={false}>
        <HeaderText text="Here are the job postings you loved. 🕺" />
        <JobContainer data={favoriteJobs} />
      </ScrollView>
    </SafeAreaView>
  );
}
