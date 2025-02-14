import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="page2/index" options={{ headerShown: false }} />
      <Stack.Screen name="page3/index" options={{ headerShown: false }} />
    </Stack>
  );
}
