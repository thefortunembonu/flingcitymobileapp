import { View, Text } from 'react-native'
import React from 'react'
import {styled} from "nativewind";
import { SafeAreaView  as RNSafeAreaView} from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);
const explore = () => {
  return (
    <SafeAreaView>
      <Text>explore</Text>
    </SafeAreaView>
  )
}

export default explore