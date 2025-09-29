import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Welcome from "@/components/Welcome";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";

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

      <ScrollView className="px-6 -mt-6">
       <Welcome/>
      </ScrollView>
    </SafeAreaView>
  );
}
