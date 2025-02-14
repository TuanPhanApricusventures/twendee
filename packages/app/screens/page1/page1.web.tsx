import { Text } from "ui/text";
import { View } from "ui/view";
import Image from 'next/image';
import map from "images/map.png";
import logo from "images/logo.png";
import { Button } from "ui/button_web";
import { useRouter } from 'next/navigation'
import arrow_right from "images/arrow_right.png";

export function Page1() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#130739] justify-center">
      {/* Logo */}
      <View className="flex-1">
        <View className="justify-center items-center mt-10">
          <Image src={logo} alt="logo" width={180} height={180} />
        </View>
        <View className="justify-center items-center mt-10">
          <Image
            src={map}
            alt="map"
            width={300}
            height={300}
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
          rightIcon={<Image src={arrow_right} alt="chevron-right" width={20} height={20} />}
        >
          See how it works
        </Button>
      </View>
    </View>
  );
}
