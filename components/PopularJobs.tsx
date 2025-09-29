import useFetch from "@/lib/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Job = {
  job_id: string;
  employer_logo?: string;
  employer_name?: string;
  job_title?: string;
  job_employment_type: string;
  job_location: string;
};
export default function PopularJobs() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch<Job>("search", {
    query: "Frontend developer",
    num_pages: 1,
    country: "ngn",
  });

  console.log(JSON.stringify(data[0]));

  return (
    <View>
      <Text className="font-bold text-xl"> Popular Jobs</Text>

      {!data && isLoading && <ActivityIndicator size={24} color={"grey"} />}

      {error && (
        <Text className=" mt-2 font-bold text-center text-red-600">
          An error occurred while making API request. (Try again later)
        </Text>
      )}

      {data && (
        <FlatList
          className="mt-2"
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-gray-100 rounded-md p-4 shadow-slate-400"
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
          contentContainerClassName="flex gap-4"
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
