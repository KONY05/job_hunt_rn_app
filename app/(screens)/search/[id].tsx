import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import JobListing from "@/components/JobListing";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { jobs } from "@/utils/constants";

export default function Search() {
  const params: Record<"id", string> = useLocalSearchParams();

  const query = jobs.filter(
    (job) =>
      job.job_employment_type ===
        params.id.replace("-", " ").replace("or", "") ||
      job.job_title?.includes(params.id) ||
      job.employer_name?.includes(params.id) // for contractor to contract
  );

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFC]">
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn icon="arrow-back" linkTo={"/(screens)"} />
          ),
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <ScrollView className="px-6 -mt-8" showsVerticalScrollIndicator={false}>
        <JobListing data={query} title={`${params.id} Jobs`} />
      </ScrollView>
    </SafeAreaView>
  );
}
