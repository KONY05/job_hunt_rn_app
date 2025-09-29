import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import JobDetailsFooter from "@/components/JobDetailsFooter";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { jobs } from "@/utils/constants";

export default function Job_Details() {
  const params = useLocalSearchParams();

  const job = jobs.find((data) => data.job_id === params.id);

  console.log(job);

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFC] mb-10 px-6">
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

      <ScrollView
        className="-mt-8 flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex gap-4 mt-8 items-center">
          <Image
            source={{ uri: job?.employer_logo }}
            className="size-20 rounded-3xl"
          />
          <Text className="font-bold text-3xl">{job?.job_title}</Text>
          <Text>
            <Text className="font-bold text-xl">{job?.employer_name} /</Text>{" "}
            <Ionicons
              name="location-outline"
              className="size-8"
              color="black"
            />
            {job?.job_location}
          </Text>
        </View>

        <View className="mt-10">
          <Text className="font-semibold text-xl">
            Job Description - {job?.job_employment_type}
          </Text>
          <Text className="mt-2 font-medium">{job?.job_description}</Text>
          <Text className="mt-4 font-medium text-[16px]">
            Salary Range: <Text className="font-normal">{job?.job_salary}</Text>
          </Text>
        </View>
      </ScrollView>
      <JobDetailsFooter job_id={ job?.job_id!} />
    </SafeAreaView>
  );
}
