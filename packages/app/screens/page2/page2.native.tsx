import { Text } from "ui/text";
import { View } from "ui/view";
import { Image } from "react-native";
import { Button } from "ui/button";
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView } from "react-native";
import brand_logos from "images/brand_logos.png";
import { useState } from "react";
import { router } from "expo-router";

export function Page2() {
  const [currentButton, setCurrentButton] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-[#130739]">
      <View className="flex-1">
        <View className="mt-12 pl-6">
          <View className="flex-row items-center justify-start">
            <View className="w-8 h-8 bg-purple-600 rounded-full items-center justify-center">
              <Text className="text-white font-bold">1</Text>
            </View>
            <View className="h-[2px] bg-purple-600 w-[100%]" />
          </View>
        </View>

        <View className="mt-6 px-6">
          <Text className="text-white text-[32px] font-bold">
            Shop your favourite{'\n'}brands, earn miles
          </Text>
        </View>

        <View className="px-6 mt-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Button
              variant={currentButton === 'shop' ? 'default' : 'secondary'}
              className="px-4 h-10"
              onPress={() => setCurrentButton('shop')}
            >
              Shop online
            </Button>
            <Button
              variant={currentButton === 'travel' ? 'default' : 'secondary'}
              className="px-4 h-10 mx-1"
              onPress={() => setCurrentButton('travel')}
            >
              Book travel
            </Button>
            <Button
              variant={currentButton === 'food' ? 'default' : 'secondary'}
              className="px-4 h-10 mx-1"
              onPress={() => setCurrentButton('food')}
            >
              Order food
            </Button>
            <Button
              variant={currentButton === 'groceries' ? 'default' : 'secondary'}
              className="px-4 h-10 mx-1"
              onPress={() => setCurrentButton('groceries')}
            >
              Order groceries
            </Button>
            <Button
              variant={currentButton === 'hotel' ? 'default' : 'secondary'}
              className="px-4 h-10 mx-1"
              onPress={() => setCurrentButton('hotel')}
            >
              Book hotel
            </Button>
          </ScrollView>
        </View>
        <View className="px-6 pt-4">
          <Image source={brand_logos} className="w-[100%] h-[350px]" resizeMode="contain" />
        </View>
      </View>

      {/* Pagination and Next Button */}
      <View className="border-t border-gray-700 pt-6" />
      <View className="mb-6 flex-row justify-between items-center px-6">
        {/* Pagination dots */}
        <View className="flex-1 flex-row space-[16px]">
          <View className="w-2 h-2 bg-gray-600 rounded-full" />
          <View className="w-6 h-2 bg-white rounded-full mx-2" />
          <View className="w-2 h-2 bg-gray-600 rounded-full" />
        </View>
        <Button
          className="w-[20%]"
          onPress={() => router.push("/page3")}
          rightIcon={<Entypo name="chevron-right" size={24} color="white" />}
        />
      </View>
    </View>
  );
}
