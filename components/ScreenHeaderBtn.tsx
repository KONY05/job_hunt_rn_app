import { useFavorite } from "@/context/FavoritesContext";
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

  const { favoriteJobIds } = useFavorite();

  const favoritePresent = favoriteJobIds && icon === "heart-outline";

  return (
    <TouchableOpacity onPress={() => (linkTo ? router.push(linkTo) : null)}>
      <Ionicons
        name={favoritePresent ? "heart" : icon}
        size={26}
        color={`${favoritePresent ? "red" : "black"}`}
      />
    </TouchableOpacity>
  );
}
