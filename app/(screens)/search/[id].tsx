import NearbyJobs from "@/components/NearbyJobs";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const params = useLocalSearchParams()

  // console.log(params);
  
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFC]">
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              icon="arrow-back"
              linkTo={"/(screens)"}
            />
          ),
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <ScrollView className="px-6 -mt-8" showsVerticalScrollIndicator={false}>
        <NearbyJobs size={false} title={`${params.id} Jobs`} />
      </ScrollView>
    </SafeAreaView>
  );
}
