import { Text } from "ui/text";
import { View } from "ui/view";
import Image from 'next/image';
import { Button } from "ui/button";
import gift from "images/gift.png";
import plane from "images/plane.png";
import passport from "images/passport.png";
import { useRouter } from 'next/navigation';

// Add redemption options data
const redemptionOptions = [
  {
    id: '1',
    title: 'Transfer miles',
    description: '25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio',
    subtitle: 'Best for Business & First Class',
    icon: <Image src={passport} className="w-[65px] h-[65px] mr-2" alt="passport" /> // We'll replace this with proper icon component later
  },
  {
    id: '2',
    title: 'Fly and Claim',
    description: 'Upload your flight ticket, and get reimbursed within 5 days.',
    subtitle: 'Best for Economy',
    icon: <Image src={plane} className="w-[65px] h-[65px] mr-2" alt="plane" /> // We'll replace this with proper icon component later
  },
  {
    id: '3',
    title: 'Not flying soon',
    description: 'You can always redeem Gift Cards with your Max Miles.',
    subtitle: 'Best for Starters',
    icon: <Image src={gift} className="w-[65px] h-[65px] mr-2" alt="gift" /> // We'll replace this with proper icon component later
  }
];

export function Page3() {
  const router = useRouter();

  const renderItem = (item) => (
    <View key={item.id} className="bg-[#1F1147] rounded-xl p-4 mb-4 flex-row items-center">
      {item.icon}
      <View className="flex-1">
        <Text className="text-white text-xl font-bold mb-1">{item.title}</Text>
        <Text className="text-gray-400 mb-2">{item.description}</Text>
        <Text className="text-purple-400">{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-[#130739]">
      <View className="flex-1">
        <View className="mt-12 px-6">
          <View className="w-8 h-8 bg-purple-600 rounded-full items-center justify-center ml-auto">
            <View className="absolute -right-[-20px] h-[2px] w-screen bg-purple-600" />
            <Text className="text-white font-bold">2</Text>
          </View>
        </View>

        <View className="mt-6 px-6">
          <Text className="text-white text-[32px] font-bold text-right">
            Redeem your trip
          </Text>
        </View>

        {/* Render list items */}
        <View className="px-6 mt-8">
          {redemptionOptions.map(item => renderItem(item))}
        </View>
      </View>

      {/* Button */}
      <View className="border-t border-gray-700 pt-6" />
      <View className="mb-6 flex-row justify-between items-center px-6">
        {/* Pagination dots */}
        <View className="flex-1 flex-row space-[16px]">
          <View className="w-2 h-2 bg-gray-600 rounded-full" />
          <View className="w-2 h-2 bg-gray-600 rounded-full mx-2" />
          <View className="w-6 h-2 bg-white rounded-full" />
        </View>
        <Button
          className="w-[40%]"
          onPress={() => window.open('https://heymax.ai', '_blank')}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
}
