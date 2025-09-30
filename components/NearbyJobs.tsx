import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { jobs } from "@/utils/constants";

export default function NearbyJobs({
  size,
  title,
}: {
  size: boolean;
  title: string;
}) {
  const router = useRouter();
  //   const { data, isLoading } = useFetch<Job>("search", {
  //     query: "Frontend developer",
  //     num_pages: 1,
  //     country: "ngn",
  //   });

  return (
    <View>
      <Text className="font-bold text-xl">{title}</Text>

      {/* {isLoading && <ActivityIndicator size={24} color={"grey"} />} */}

      {/* {error && (
        <Text className=" mt-2 font-bold text-center text-red-600">
          An error occurred while making API request. (Try again later)
        </Text>
      )} */}

      <FlatList
        className="mt-2"
        data={
          size
            ? jobs.slice(10, 30)
            : jobs.filter(
                (job) =>
                  job.job_employment_type ===
                    title
                      .replace("-", " ")
                      .replace(" Jobs", "")
                      .split(" ")
                      .splice(0, 2)
                      .join(" ")
                      .replace("or", "") ||
                  job.job_title?.includes(title.replace(" Jobs", "")) ||
                  job.employer_name === title.replace(" Jobs", "") // for contractor to contract
              )
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-gray-100 rounded-md p-4 shadow-slate-400"
            onPress={() => {
              router.push(`/(screens)/job-details/${item.job_id}`);
            }}
          >
            <Image
              source={{
                uri: item.employer_logo ?? "",
              }}
              className="size-12 rounded-full"
              resizeMode="contain"
            />
            <View className="flex gap-2 mt-2">
              <View className="flex flex-row justify-between">
                <Text className="font-medium text-sm">
                  {item.job_employment_type}
                </Text>
                <Text className="font-semibold text-sm">
                  @{item.job_location}
                </Text>
              </View>
              <Text className="font-bold">{item.job_title}</Text>
              <View className="flex flex-row justify-between">
                <Text className="font-medium text-gray-600">
                  {item.employer_name}
                </Text>
                <Text className="font-semibold">
                  {item.job_salary}
                  {/* N/A */}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
        contentContainerClassName="flex gap-4"
      />
    </View>
  );
}
