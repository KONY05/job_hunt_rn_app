import { Ionicons } from "@expo/vector-icons";
import { useRouter, type Href } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function ScreenHeaderBtn({
  icon,
  linkTo,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  linkTo: Href | null;
}) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => linkTo ? router.push(linkTo) : null}>
      <Ionicons name={icon} size={26} color="black" />
    </TouchableOpacity>
  );
}
