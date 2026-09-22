import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const onboarding = () => {
  return (
    <View className= ' px-24'>
      <Text>onboarding</Text>
      <Link className="rounded  text-center mt-4 p-4 bg-primary text-white " href="/(auth)/sign-in">Register</Link>
    </View>
  )
}

export default onboarding