import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const ProfileDetails = () => {
    
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>ProfileDetails</Text>
    </View>
  )
}

export default ProfileDetails