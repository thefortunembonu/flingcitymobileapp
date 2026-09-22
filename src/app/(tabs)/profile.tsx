import { View, Text } from 'react-native'
import React from 'react'

import {styled} from "nativewind";
import { SafeAreaView  as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const profile = () => {
  return (
    <SafeAreaView>
      <Text>profile</Text>
    </SafeAreaView>
  )
}

export default profile