import { Text, View } from "react-native";

import { Job } from "@/utils/types";
import JobContainer from "./JobContainer";

export default function JobListing({
  data,
  title,
}: {
  data: Job[];
  title: string;
}) {
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

      <JobContainer data={data}/>
    </View>
  );
}
