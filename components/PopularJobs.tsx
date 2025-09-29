import { jobs } from "@/utils/constants";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function PopularJobs() {
  const router = useRouter();
  //   const { data, isLoading } = useFetch<Job>("search", {
  //     query: "Frontend developer",
  //     num_pages: 1,
  //     country: "ngn",
  //   });

  //   console.log(JSON.stringify(data[0]));

  return (
    <View>
      <Text className="font-bold text-xl"> Popular Jobs</Text>

      {/* {isLoading && <ActivityIndicator size={24} color={"grey"} />} */}

      {/* {error && (
        <Text className=" mt-2 font-bold text-center text-red-600">
          An error occurred while making API request. (Try again later)
        </Text>
      )} */}

      <FlatList
        className="mt-2"
        data={jobs.slice(0, 10)}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-gray-100 rounded-md p-4 shadow-slate-400 min-w-[200px]"
            onPress={() => {
              router.push(`/(screens)/search/${item.job_id}`);
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
              <View>
                <Text className="font-medium text-gray-600">
                  {item.employer_name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        horizontal
        keyExtractor={(item) => item.job_id}
        contentContainerClassName="flex gap-4"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
