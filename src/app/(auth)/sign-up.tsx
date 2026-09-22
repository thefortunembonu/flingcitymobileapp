import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/sign-up">Sign In</Link>
    </View>
  )
}

export default SignUp