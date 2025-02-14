import { Text } from "ui/text";
import { View } from "ui/view";
import { Image } from "react-native";
import map from "images/map.png";
import logo from "images/logo.png";
import { Button } from "ui/button_native";
import Entypo from '@expo/vector-icons/Entypo';
import { router } from "expo-router";

export function Page1() {
  return (
    <View className="flex-1 bg-[#130739] justify-center">
      {/* Logo */}
      <View className="flex-1">
        <View className="justify-center items-center mt-10">
          <Image source={logo} style={{ width: "45%" }} resizeMode="contain" />
        </View>
        <View className="justify-center items-center">
          <Image
            source={map}
            style={{ width: "100%", height: 230 }}
            resizeMode="contain"
          />
        </View>

        {/* Content */}
        <View className="justify-center items-center">
          <Text className="text-white text-[32px] font-semibold">
            Shop your way to a
          </Text>
          <Text className="text-purple-500 font-bold text-[32px] mb-3">
            Dream Vacation
          </Text>
          <Text className="text-white text-[16px] text-center">
            Turn your expenses into dream vacations by earning miles every time you shop
          </Text>
        </View>
      </View>

      {/* Button */}
      <View className="border-t border-gray-700 pt-6" />
      <View className="mb-6 flex-row justify-between items-center px-6">
        {/* Pagination dots */}
        <View className="flex-1 flex-row space-[16px]">
          <View className="w-6 h-2 bg-white rounded-full" />
          <View className="w-2 h-2 bg-gray-600 rounded-full mx-2" />
          <View className="w-2 h-2 bg-gray-600 rounded-full" />
        </View>
        <Button
          className="w-[60%]"
          onPress={() => router.push("/page2")}
          rightIcon={<Entypo name="chevron-right" size={20} color="white" />}
        >
          See how it works
        </Button>
      </View>
    </View>
  );
}
