import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Job } from "@/utils/types";

export default function JobContainer({ data }: { data: Job[] }) {
  const router = useRouter();

  return (
    <FlatList
      className="mt-2"
      data={data}
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
  );
}
