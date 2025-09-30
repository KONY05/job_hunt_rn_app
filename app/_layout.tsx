import { FavoritesProvider } from "@/context/FavoritesContext";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack />
    </FavoritesProvider>
  );
}
