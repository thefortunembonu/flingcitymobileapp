import "@/global.css"
import { Text, View } from "react-native";
import { Link } from "expo-router";
 
export default function Homescreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
      <Text className='text-secondary font-bold'> I Love Tailwind</Text>
       <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4 "> Onboarding</Link>
    </View>
   
  );
}
