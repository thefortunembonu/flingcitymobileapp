import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import {styled} from "nativewind";
import { SafeAreaView  as RNSafeAreaView} from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);
const onboarding = () => {
  return (
    <SafeAreaView className= 'flex justify-center items-center'>
      <Text>onboarding</Text>
      <Link className="rounded mt-4 p-4 bg-primary text-white " href="/(auth)/sign-in">Register</Link>
    </SafeAreaView>
  )
}

export default onboarding