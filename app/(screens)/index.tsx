import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NearbyJobs from "@/components/NearbyJobs";
import PopularJobs from "@/components/PopularJobs";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import Welcome from "@/components/Welcome";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFC]">
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn icon="person-outline" linkTo={null} />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn
              icon="heart-outline"
              linkTo={"/(screens)/favorites"}
            />
          ),
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <ScrollView className="px-6 -mt-6" showsVerticalScrollIndicator={false}>
        <View className="flex gap-3">
          <Welcome />
          <PopularJobs />
          <NearbyJobs size={ true} title="Nearby Jobs"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
